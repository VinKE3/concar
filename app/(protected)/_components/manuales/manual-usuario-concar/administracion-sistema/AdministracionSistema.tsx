import Image from "next/image";
import React from "react";
import { dataManualUsuario } from "@/data/manuales.data";
import List from "@/components/List";

const AdministracionSistema = () => {
  const newData = dataManualUsuario.slice(82, 88);
  return (
    <div className="space-y-3">
      <p>
        El módulo de Administración del Sistema permite realizar procesos
        vinculados a la administración de usuarios y compañías. Las opciones
        definidas en el menú Administración Sistema son las siguientes:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_c11_menu_administracion_sistema_1.jpg"
        alt="Movimiento Contable Banco"
        width={500}
        height={500}
      />
      <p>A continuación el detalle de las opciones de este módulo:</p>
      <List items={newData} />
    </div>
  );
};

export default AdministracionSistema;
