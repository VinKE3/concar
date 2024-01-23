import Table from "@/components/Table";
import React from "react";

const ReportesAnuales = () => {
  const data = [
    {
      id: 1,
      title: "Reportes Anuales",
      href: "https://miconcar.com/uploads/documentos/342_CONCAR_SQL_Reportes_anuales.pdf",
    },
  ];
  return (
    <div>
      <p>
        Incluye reportes con análisis de cuentas anuales con detalle mensual.
      </p>
      <Table items={data} />
    </div>
  );
};

export default ReportesAnuales;
