import Table from "@/components/Table";
import React from "react";

const LibroRegistrosOficiales2 = () => {
  const data = [
    {
      id: 1,
      title: "Libros y Registros Oficiales - Parte 2",
      href: "https://miconcar.com/uploads/documentos/337_CONCAR_SQL_Libro_y_registros_oficiales_parte_2.pdf",
    },
  ];
  return (
    <div>
      <p>
        Incluye los formatos oficiales SUNAT de Libros Contables desde el
        Registro de Compras hasta Registro de Ventas (Genera Archivo Mensual
        Ventas).
      </p>
      <Table items={data} />
    </div>
  );
};

export default LibroRegistrosOficiales2;
