import Table from "@/components/Table";
import React from "react";

const ReporteEjecucionPresupuesto = () => {
  const data = [
    {
      id: 1,
      title: "Reporte Ejecución Presupuesto",
      href: "https://miconcar.com/uploads/documentos/349_CONCAR_SQL_Reporte_ejecucion_de_presupuesto.pdf",
    },
  ];
  return (
    <div>
      <p>
        Este reporte se utiliza para comparar lo presupuestado por centro de
        costo/cuenta contra lo ejecutado y luego ver la variación en términos
        absolutos o porcentuales.
      </p>
      <Table items={data} />
    </div>
  );
};

export default ReporteEjecucionPresupuesto;
