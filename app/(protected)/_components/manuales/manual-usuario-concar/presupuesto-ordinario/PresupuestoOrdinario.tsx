import Table from "@/components/Table";
import React from "react";

const PresupuestoOrdinario = () => {
  const data = [
    {
      id: 1,
      title: "Presupuesto Ordinario",
      href: "https://miconcar.com/uploads/documentos/351_CONCAR_SQL_Presupuesto_ordinario.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Emite un reporte de flujo de caja ejecutado, teniendo la posibilidad
        compararse 2 ejercicios.
      </p>
      <Table items={data} />
    </div>
  );
};

export default PresupuestoOrdinario;
