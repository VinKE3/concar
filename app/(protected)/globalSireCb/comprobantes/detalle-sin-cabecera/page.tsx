import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Detalle sin cabecera",
      href: "https://miconcar.com/uploads/documentos/147_CONCAR_CB_Detalle_sin_cabecera.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Descripción del caso</h1>
      <p>
        Al realizar el proceso de consolidación mensual en el sistema CONCAR® se
        muestra el mensaje Detalle sin Cabecera.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
