import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Comprobante Compras",
      href: "https://miconcar.com/uploads/documentos/53_CONCAR_CB_Comprobante_compras.pdf",
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

export default page;
