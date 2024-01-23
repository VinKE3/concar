import Table from "@/components/Table";
import React from "react";

const GananciasPerdidas = () => {
  const data = [
    {
      id: 1,
      title: "Ganancias y Pérdidas",
      href: "https://miconcar.com/uploads/documentos/325_6.02_CONCAR_SQL_Ganancias_y_Pérdidas_325-D00322.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        El sistema tiene diferentes presentaciones del Estado de Ganancias y
        Pérdidas.
      </p>
      <Table items={data} />
    </div>
  );
};

export default GananciasPerdidas;
