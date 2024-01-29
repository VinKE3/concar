import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Nota de Crédito Especial",
      href: "https://miconcar.com/uploads/documentos/735_CONCAR_SQL_Nota_de_credito_especial.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso</h1>
      <p>Cómo registrar una nota de crédito especial.</p>

      <Table items={data} />
    </div>
  );
};

export default page;
