import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Error en serie de tipo de documento 01 - Factura.",
      href: "https://miconcar.com/uploads/documentos/861_ERROR_SERIE_TIPO_DE_DOCUMENTO_FACTURA.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso:</h1>

      <Table items={data} />
    </div>
  );
};

export default page;
