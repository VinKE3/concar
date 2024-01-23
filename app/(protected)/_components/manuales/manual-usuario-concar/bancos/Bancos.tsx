import Table from "@/components/Table";
import React from "react";

const Bancos = () => {
  const data = [
    {
      id: 1,
      title: "Bancos",
      href: "https://miconcar.com/uploads/documentos/332_CONCAR_SQL_Bancos.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Este reporte muestra los ingresos, egresos y saldos de las cuentas
        corrientes.
      </p>
      <Table items={data} />
    </div>
  );
};

export default Bancos;
