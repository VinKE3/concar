import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Conciliación Bancaria",
      href: "https://miconcar.com/uploads/documentos/104_CONCAR_CB_Conciliacion_bancaria.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        El módulo de Conciliación Bancaria permite realizar la conciliación de
        movimientos comparando lo registrado en los comprobantes contables de
        bancos y lo que reporta el banco vía el estado de cuenta bancario a una
        fecha determinada.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
