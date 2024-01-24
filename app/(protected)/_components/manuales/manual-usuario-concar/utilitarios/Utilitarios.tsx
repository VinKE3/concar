import List from "@/components/List";
import { dataManualUsuario } from "@/data/manuales.data";
import Image from "next/image";
import React from "react";

const Utilitarios = () => {
  const newData = dataManualUsuario.slice(89, 93);
  return (
    <div className="space-y-3">
      <p>
        El módulo de Utilitarios permite realizar procesos auxiliares como
        movimiento de datos, verificar comprobantes que generen descuadres
        naturaleza/destino.
      </p>
      <p>
        Las opciones definidas en el menú Administración Sistema son las
        siguientes:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_c12_menu_utilitarios_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={700}
        height={700}
      />
      <p>A continuación el detalle de las opciones de este módulo:</p>
      <List items={newData} />
    </div>
  );
};

export default Utilitarios;
