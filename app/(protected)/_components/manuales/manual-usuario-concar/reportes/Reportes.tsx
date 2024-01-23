import Table from "@/components/Table";
import React from "react";

const Reportes = () => {
  const data = [
    {
      id: 1,
      title: "Reportes",
      href: "https://miconcar.com/uploads/documentos/323_CONCAR_SQL_Reportes.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Este módulo permite emitir los reportes de resultado en base a los datos
        ya ingresados en los asientos contables. Todos los reportes pueden ser
        visualizados en la pantalla antes de ser impresos. También es posible
        archivarlo en disco para posteriormente imprimirlos o importarlos a
        cualquier hoja de cálculo sin tener que reprocesar el mes.
      </p>
      <Table items={data} />
    </div>
  );
};

export default Reportes;
