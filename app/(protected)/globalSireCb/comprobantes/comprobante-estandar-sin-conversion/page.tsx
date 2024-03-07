import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Comprobante Estándar sin Conversión",
      href: "https://miconcar.com/uploads/documentos/52_CONCAR_CB_Comprobante_estandar_sin_conversion.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Mediante esta opción se pueden registrar los asientos de apertura,
        cierre, diferencia de cambio y otros asientos en los cuales se requiere
        un tipo de cambio por cada cuenta o ingresar manualmente los importes en
        moneda nacional y/o dólares o una combinación de ambas opciones.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
