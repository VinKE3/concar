import Table from "@/components/Table";
import React from "react";

const ComprobanteCompras = () => {
  const data = [
    {
      id: 1,
      title: "Comprobante Compras",
      href: "https://miconcar.com/uploads/documentos/311_5.04_CONCAR_SQL_Comprobante_compras_311-D00308.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Permite registrar los documentos de las operaciones de compras (sólo las
        provisiones). El sistema genera el asiento afectando la cuenta del
        impuesto y la provisión a la cuenta por pagar; debiendo el usuario
        afectar la cuenta de gastos, activos o compras de existencias.
      </p>
      <Table items={data} />
    </div>
  );
};

export default ComprobanteCompras;
