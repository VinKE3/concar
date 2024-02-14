import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Aplicacion de Nota de Credito",
      href: "https://miconcar.com/uploads/documentos/807_INSTRUCTIVO_MICONCAR_-_APLICACION_-_CANCELACION_DE_NOTAS_DE_CREDITO.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <Table items={data} />
    </div>
  );
};

export default page;
