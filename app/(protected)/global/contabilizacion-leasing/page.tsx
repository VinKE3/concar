import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Contabilización de Leasing",
      href: "https://miconcar.com/uploads/documentos/711_CONCAR_SQL_Contabilizacion_de_leasing.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p className="font-bold">Caso</p>

      <p>Cómo contabilizar un leasing.</p>

      <Table items={data} />
    </div>
  );
};

export default page;
