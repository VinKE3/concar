import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Actualización de Tasas de Detracción",
      href: "https://miconcar.com/uploads/documentos/701_CONCAR_CB_Actualizacion_de_tasas_de_detraccion.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p className="font-bold">Caso</p>
      <p>Cómo actualizar las tasas de detracción.</p>

      <Table items={data} />
    </div>
  );
};

export default page;
