import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Impresión de libros oficiales.",
      href: "https://miconcar.com/uploads/documentos/803_INSTRUCTIVO_MICONCAR_-_IMPRESION_DE_LIBROS_OFICIALES.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso:</h1>
      <p>Como imprimir los libros oficiales.</p>
      <Table items={data} />
    </div>
  );
};

export default page;
