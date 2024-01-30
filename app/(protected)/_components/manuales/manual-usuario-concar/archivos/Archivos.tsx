import Image from "next/image";
import React from "react";
import { dataManualUsuario } from "@/data/manuales.data";
import List from "@/components/List";

const Archivos = () => {
  const newData = dataManualUsuario.slice(4, 19);
  return (
    <div className="space-y-3">
      <p>
        El módulo de Archivos permite efectuar el mantenimiento y consulta de
        las bases de datos del sistema. Las bases de datos principales son
        aquellas que mantienen la información relativamente fija en el sistema;
        es decir, que sufren modificaciones muy rara vez y en donde se
        encuentran todos los datos que caracterizan a la empresa.
      </p>
      <p>
        Las bases de datos principales definidas para el sistema de Contabilidad
        General (menú Archivos) son las siguientes:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_c4_menu_archivos_.jpg"
        alt="Archivos"
        width={700}
        height={500}
      />
      <p>A continuación el detalle de las opciones de este módulo:</p>
      <List items={newData} />
    </div>
  );
};

export default Archivos;
