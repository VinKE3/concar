import Table from "@/components/Table";
import React from "react";

const LibroRegistrosOficiales = () => {
  const data = [
    {
      id: 1,
      title: "Libros y Registros Oficiales - Parte 1",
      href: "https://miconcar.com/uploads/documentos/337_CONCAR_SQL_Libro_y_registros_oficiales_parte_1.pdf",
    },
  ];
  return (
    <div>
      <p>Incluye los formatos oficiales SUNAT de Libros Contables.</p>
      <Table items={data} />
    </div>
  );
};

export default LibroRegistrosOficiales;
