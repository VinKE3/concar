import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Importaciones - Ingreso de la Factura del Agente de Aduana",
      href: "https://miconcar.com/uploads/documentos/721_CONCAR_SQL_Importaciones_ingreso_de_la_factura_del_agente_aduana1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso</h1>

      <p>Cómo ingresar la factura del agente de Aduana.</p>

      <Table items={data} />
    </div>
  );
};

export default page;
