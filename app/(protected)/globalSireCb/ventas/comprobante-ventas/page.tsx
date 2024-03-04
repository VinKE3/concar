import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Comprobante Ventas",
      href: "https://miconcar.com/uploads/documentos/56_CONCAR_CB_Comprobante_ventas.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Esta opción permite registrar los comprobantes de ventas en forma
        simplificada y automatizada. En esta opción, el sistema genera en forma
        automática el cargo a cuenta 12XXXX o 13XXXX por la provisión y los
        abonos a la 40XXXX por el IGV y a la 70XXXX por el valor de venta. Para
        poder utilizar esta opción debe haber actualizado previamente el
        Mantenimiento Parámetros Ventas.
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
