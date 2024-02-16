import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Instructivo como imprimir registro de ventas en una hoja",
      href: "https://miconcar.com/uploads/documentos/802_INSTRUCTIVO_MICONCAR_-_VENTAS_EN_UNA_SOLA_HOJA.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso:</h1>
      <p>Cómo imprimir el registro de ventas en una sola hoja.</p>

      <Table items={data} />
    </div>
  );
};

export default page;
