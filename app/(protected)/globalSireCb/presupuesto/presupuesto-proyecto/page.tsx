import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Presupuesto por Proyecto",
      href: "https://miconcar.com/uploads/documentos/103_CONCAR_CB_Presupuesto_por_proyecto.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso:</h1>
      <p>Permite llevar el control presupuestal por proyecto específico.</p>

      <Table items={data} />
    </div>
  );
};

export default page;
