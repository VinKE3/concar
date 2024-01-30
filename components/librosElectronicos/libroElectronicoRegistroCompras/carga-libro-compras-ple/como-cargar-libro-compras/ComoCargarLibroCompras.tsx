import Heading from "@/components/Heading";
import Table from "@/components/Table";
import React from "react";

const ComoCargarLibroCompras = () => {
  const data = [
    {
      id: 1,
      title: "Validación y Envío al PLE-SUNAT - Libro Electrónico de Compras.",
      href: "https://miconcar.com/uploads/documentos/847_VALIDACION_DE_LIBRO_ELECTRONICO_DE_COMPRAS_CONCAR_CB_SQL1.pdf",
    },
  ];
  return (
    <>
      <Table items={data} />
    </>
  );
};

export default ComoCargarLibroCompras;
