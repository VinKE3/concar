import Table from "@/components/Table";
import React from "react";

const LibroRegistrosOficiales3 = () => {
  const data = [
    {
      id: 1,
      title: "Libros y Registros Oficiales - Parte 1",
      href: "https://miconcar.com/uploads/documentos/337_CONCAR_SQL_Libro_y_registros_oficiales_parte_3.pdf",
    },
  ];
  return (
    <div>
      <p>
        Incluye los formatos oficiales SUNAT de Libros Contables desde
        Mantenimiento Archivo Ventas hasta Otros Reportes de Ventas.
      </p>
      <Table items={data} />
    </div>
  );
};

export default LibroRegistrosOficiales3;
