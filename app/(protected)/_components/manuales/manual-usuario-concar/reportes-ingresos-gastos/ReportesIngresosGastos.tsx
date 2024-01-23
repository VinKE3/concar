import Table from "@/components/Table";
import React from "react";

const ReportesIngresosGastos = () => {
  const data = [
    {
      id: 1,
      title: "Reportes de Ingresos y Gastos",
      href: "https://miconcar.com/uploads/documentos/333_CONCAR_SQL_Reportes_de_ingresos_y_gastos.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Incluye los reportes de ingresos y gastos adicionales a los de Ganancias
        y Pérdidas{" "}
      </p>
      <Table items={data} />
    </div>
  );
};

export default ReportesIngresosGastos;
