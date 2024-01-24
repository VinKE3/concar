import Table from "@/components/Table";
import React from "react";

const ProcesoConciliacion = () => {
  const data = [
    {
      id: 1,
      title: "Proceso de Conciliación",
      href: "https://miconcar.com/uploads/documentos/353_CONCAR_SQL_Proceso_de_conciliacion.pdf",
    },
  ];
  return (
    <div>
      <p>Esta opción permite realizar el proceso de conciliación bancaria.</p>
      <Table items={data} />
    </div>
  );
};

export default ProcesoConciliacion;
