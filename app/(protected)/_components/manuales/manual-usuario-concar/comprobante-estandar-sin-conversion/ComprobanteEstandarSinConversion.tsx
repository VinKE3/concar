import Table from "@/components/Table";
import React from "react";

const ComprobanteEstandarSinConversion = () => {
  const data = [
    {
      id: 1,
      title: "Comprobante Estándar sin Conversión",
      href: "https://miconcar.com/uploads/documentos/documentos/310_5.03_CONCAR_SQL_Comprobante_estandar_sin_conversion_310-D00307.pdf",
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

export default ComprobanteEstandarSinConversion;
