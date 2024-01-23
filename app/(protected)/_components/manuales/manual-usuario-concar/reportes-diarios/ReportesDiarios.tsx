import Table from "@/components/Table";
import React from "react";

const ReportesDiarios = () => {
  const data = [
    {
      id: 1,
      title: "Diarios",
      href: "https://miconcar.com/uploads/documentos/327_CONCAR_SQL_Diarios.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Incluye reportes de Libros Diarios anteriores y no oficiales.</p>
      <Table items={data} />
    </div>
  );
};

export default ReportesDiarios;
