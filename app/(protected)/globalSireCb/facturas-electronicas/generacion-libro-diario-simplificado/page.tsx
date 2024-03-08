import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Cómo generar los libros electrónicos Diario y Mayor.",
      href: "https://miconcar.com/uploads/documentos/844_COMO_GENERAR_LIBROS_ELECTR%C3%93NICOS_DE_DIARIO_Y_MAYOR_CB.pdf",
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
