import Table from "@/components/Table";
import React from "react";

const Consultas = () => {
  const data = [
    {
      id: 1,
      title:
        "Permite realizar consultas de saldos de balance, balance de comprobación y análisis de cuenta.",
      href: "https://miconcar.com/uploads/documentos/339_CONCAR_SQL_Consultas.pdf",
    },
  ];
  return (
    <div>
      <p>
        Permite realizar consultas de saldos de balance, balance de comprobación
        y análisis de cuenta.
      </p>
      <Table items={data} />
    </div>
  );
};

export default Consultas;
