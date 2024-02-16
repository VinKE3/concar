import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Mantenimiento Tipo pago por programa",
      href: "https://miconcar.com/uploads/documentos/47_CONCAR_CB_Mantenimiento_presupuesto.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Se debe configurar los tipos de medio de pago que pueden ser utilizados
        para cada una de las opciones de generación de comprobantes contables.
        Este dato es requisito cuando se contabilizan operaciones de cobranzas o
        pagos.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
