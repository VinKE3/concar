import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Estado Cambio Patrimonio Neto",
      href: "https://miconcar.com/uploads/documentos/81_CONCAR_CB_Estado_cambio_patrimonio_neto.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Estado de Cambios en el Patrimonio.</h1>
      <p>
        El Estado de Cambios en el Patrimonio Neto muestra los cambios en el
        patrimonio de la empresa en un período de tiempo.
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
