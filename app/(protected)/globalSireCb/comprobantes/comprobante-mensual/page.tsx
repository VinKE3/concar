import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Comprobantes Mensuales",
      href: "https://miconcar.com/uploads/documentos/85_CONCAR_CB_Comprobantes_mensuales.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Comprobantes Mensuales</h1>
      <p>
        Muestra los comprobantes por subdiario según el mes de consolidación.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
