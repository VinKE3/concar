import Table from "@/components/Table";
import React from "react";

const ReporteComprobantes = () => {
  const data = [
    {
      id: 1,
      title: "Reportes Comprobantes",
      href: "https://miconcar.com/uploads/documentos/320_5.13_CONCAR_SQL_Reportes_Comprobantes.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Esta opción mostrará reportes de los comprobantes ingresados, así se
        encuentren en situación P (Pendiente) o F (Finalizado).
      </p>
      <Table items={data} />
    </div>
  );
};

export default ReporteComprobantes;
