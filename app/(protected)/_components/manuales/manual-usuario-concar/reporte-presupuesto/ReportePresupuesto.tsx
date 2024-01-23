import Table from "@/components/Table";
import React from "react";

const ReportePresupuesto = () => {
  const data = [
    {
      id: 1,
      title: "Reporte de Presupuesto",
      href: "https://miconcar.com/uploads/documentos/348_CONCAR_SQL_Reporte_de_presupuesto.pdf",
    },
  ];
  return (
    <div>
      <p>
        Imprime el reporte de lo presupuestado en el Mantenimiento de
        Presupuesto, pudiéndose generar en moneda nacional o extranjera.
      </p>
      <Table items={data} />
    </div>
  );
};

export default ReportePresupuesto;
