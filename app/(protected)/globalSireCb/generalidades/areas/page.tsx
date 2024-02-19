import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Areas",
      href: "https://miconcar.com/uploads/documentos/82_CONCAR_CB_Areas.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">7.11 Áreas</h1>
      <h1 className="font-bold">7.11.1 Resumen por áreas</h1>
      <p>
        Imprime reporte que muestra los totales de ingresos y egresos por cada
        área, así como también los totales generales
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
