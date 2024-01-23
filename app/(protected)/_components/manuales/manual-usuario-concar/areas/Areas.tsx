import Table from "@/components/Table";
import React from "react";

const Areas = () => {
  const data = [
    {
      id: 1,
      title: "Áreas",
      href: "https://miconcar.com/uploads/documentos/331_CONCAR_SQL_Areas.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Imprime reporte que muestra los totales de ingresos y egresos por cada
        área, así como también los totales generales.
      </p>
      <Table items={data} />
    </div>
  );
};

export default Areas;
