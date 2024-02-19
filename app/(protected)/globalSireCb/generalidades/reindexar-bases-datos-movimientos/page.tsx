import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Reindexar Bases Datos Movimientos",
      href: "https://miconcar.com/uploads/documentos/120_CONCAR_CB_Reindexar_bases_datos_movimientos.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Esta opción permite reordenar, entre otras, las siguientes bases de
        datos:
      </p>
      <ul className="font-bold px-5">
        <li>Cabecera y Detalle de Comprobantes Contables</li>
        <li>Numeración de Comprobantes</li>
        <li>Estados de Cuenta</li>
        <li>Cheques</li>
      </ul>
      <Table items={data} />
    </div>
  );
};

export default page;
