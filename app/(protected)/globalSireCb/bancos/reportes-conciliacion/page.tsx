import Table from "@/components/Table";
import React from "react";

const ReportesConciliacion = () => {
  const data = [
    {
      id: 1,
      title: "Reportes Conciliación",
      href: "https://miconcar.com/uploads/documentos/107_CONCAR_CB_Reportes_de_conciliacion.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">
        Permite imprimir los resultados del proceso de conciliación bancaria.
      </h1>
      <p>
        Permite imprimir los resultados del proceso de conciliación bancaria.
      </p>
      <Table items={data} />
    </div>
  );
};

export default ReportesConciliacion;
