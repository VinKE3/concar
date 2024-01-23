import Table from "@/components/Table";
import React from "react";

const ReportesCostos = () => {
  const data = [
    {
      id: 1,
      title: "Costos",
      href: "https://miconcar.com/uploads/documentos/326_CONCAR_SQL_Costos.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Muestra los gastos incurridos en un mes seleccionado por cada centro de
        costo. Los datos son mostrados a nivel de cuenta, título (2 dígitos) y a
        nivel de cuenta registral.
      </p>
      <Table items={data} />
    </div>
  );
};

export default ReportesCostos;
