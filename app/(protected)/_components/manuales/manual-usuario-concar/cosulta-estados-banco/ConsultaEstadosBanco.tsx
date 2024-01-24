import Table from "@/components/Table";
import React from "react";

const ConsultaEstadosBanco = () => {
  const data = [
    {
      id: 1,
      title: "Consulta de Estados por Banco",
      href: "https://miconcar.com/uploads/documentos/356_CONCAR_SQL_Consulta_de_estados_por_banco.pdf",
    },
  ];
  return (
    <div>
      <p>
        Muestra los movimientos bancarios registrados en los estados cuenta.
      </p>
      <Table items={data} />
    </div>
  );
};

export default ConsultaEstadosBanco;
