import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Registro y/o Contabilización de una nota de crédito",
      href: "https://miconcar.com/uploads/documentos/709_CONCAR_CB_Registro_y_contabilizacion_de_una_nota_de_credito.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso</h1>
      <p>Cómo registrar una nota de crédito (nota de abono).</p>
      <Table items={data} />
    </div>
  );
};

export default page;
