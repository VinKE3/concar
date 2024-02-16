import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Cancelación de Compras con Cheque",
      href: "https://miconcar.com/uploads/documentos/708_CONCAR_SQL_Cancelacion_de_compras_con_cheque.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso:</h1>
      <p>Cómo cancelar compras con cheque.</p>

      <Table items={data} />
    </div>
  );
};

export default page;
