import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Consultas Conciliación Bancaria",
      href: "https://miconcar.com/uploads/documentos/108_CONCAR_CB_Consultas_conciliacion_bancaria.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Consultas </h1>
      <p>
        Esta opción permite realizar consultas de movimientos contables y de
        estados de cuenta.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
