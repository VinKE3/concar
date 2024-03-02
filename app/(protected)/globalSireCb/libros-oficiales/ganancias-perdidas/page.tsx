import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Ganancias y Pérdidas",
      href: "https://miconcar.com/uploads/documentos/72_CONCAR_CB_Ganancias_y_perdidas.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        El sistema tiene diferentes presentaciones del Estado de Ganancias y
        Pérdidas o Estado de Resultados.
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
