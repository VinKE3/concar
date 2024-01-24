import Table from "@/components/Table";
import React from "react";

const EjecucionPresupuestalCentroCosto = () => {
  const data = [
    {
      id: 1,
      title: "Ejecución Presupuestal x Centro Costo",
      href: "https://miconcar.com/uploads/documentos/352_CONCAR_SQL_Ejecucion_presupuestal_x_centro_costo.pdf",
    },
  ];
  return (
    <div>
      <p>
        Este reporte nos permite comparar lo presupuestado por centro de costo
        contra lo ejecutado y luego ver la variación en términos absolutos o
        porcentuales. Cabe recalcar que este reporte es sólo para la
        configuración de presupuesto por centro de costo.
      </p>
      <Table items={data} />
    </div>
  );
};

export default EjecucionPresupuestalCentroCosto;
