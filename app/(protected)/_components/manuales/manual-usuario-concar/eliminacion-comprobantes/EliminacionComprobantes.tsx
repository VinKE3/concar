import Table from "@/components/Table";
import React from "react";

const EliminacionComprobantes = () => {
  const data = [
    {
      id: 1,
      title: "Log eliminación comprobantes",
      href: "https://miconcar.com/uploads/documentos/319_5.12_CONCAR_SQL_Log_eliminación_comprobantes_319-D00316.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Muestra los comprobantes contables eliminados, indicando usuario y fecha
        de eliminación.
      </p>
      <Table items={data} />
    </div>
  );
};

export default EliminacionComprobantes;
