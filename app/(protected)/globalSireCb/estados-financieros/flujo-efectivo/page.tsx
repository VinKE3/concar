import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Flujo Efectivo",
      href: "https://miconcar.com/uploads/documentos/80_CONCAR_CB_Flujo_efectivo.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">7.9 Flujo Efectivo</h1>
      <p>
        El Estado de Flujo de Efectivo muestra el efecto de los cambios de
        efectivo y equivalentes de efectivo, en un tiempo determinado. Se debe
        mostrar separadamente lo siguiente:
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
