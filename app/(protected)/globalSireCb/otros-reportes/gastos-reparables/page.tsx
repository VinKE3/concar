import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Gastos reparables",
      href: "https://miconcar.com/uploads/documentos/831_CONCAR_SQL_Gastos_reparables.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        El presente documento contiene el procedimiento a realizar en el sistema
        para configurar las cuentas de gastos reparables y deducibles, y poder
        obtener un reporte de los mismos.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
