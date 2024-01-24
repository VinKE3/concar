import Table from "@/components/Table";
import React from "react";

const ReportesConciliacion = () => {
  const data = [
    {
      id: 1,
      title: "Reportes Conciliación",
      href: "https://miconcar.com/uploads/documentos/354_CONCAR_SQL_Reportes_conciliacion.pdf",
    },
  ];
  return (
    <div>
      <p>
        Esta opción permite imprimir los resultados del proceso de conciliación
        bancaria.
      </p>
      <Table items={data} />
    </div>
  );
};

export default ReportesConciliacion;
