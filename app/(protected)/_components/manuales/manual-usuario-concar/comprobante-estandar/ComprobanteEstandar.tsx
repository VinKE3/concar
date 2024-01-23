import Table from "@/components/Table";
import React from "react";

const ComprobanteEstandar = () => {
  const data = [
    {
      id: 1,
      title: "Comprobante Estándar con Conversión",
      href: "https://miconcar.com/uploads/documentos/documentos/309_5.02_CONCAR_SQL_Comprobante_estandar_con_conversion_309-D00306.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Mediante esta opción se puede registrar en el sistema cualquier asiento
        de diario como son:
      </p>
      <p>
        Bancos, cajas, planillas, costos, canjes, cancelaciones de clientes y
        otros; exceptuando los registros por compras, ventas, honorarios y
        cheques.
      </p>
      <p>
        Al registrar un comprobante, el sistema solicitará el código de moneda
        original y el tipo de cambio. Todos los movimientos registrados en dicho
        comprobante tendrán el mismo tipo de cambio.
      </p>
      <Table items={data} />
    </div>
  );
};

export default ComprobanteEstandar;
