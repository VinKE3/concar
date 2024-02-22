import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Comprobante Compras no Domiciliados",
      href: "https://miconcar.com/uploads/documentos/1214_5.05_CONCAR_SQL_Comprobante_compras_no_domiciliados_1214-D01201.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        En ésta opción se registran los parámetros que definirán el registro y
        control de los comprobantes de compras a no domiciliados. Entre otros
        datos se definirán los tipos de documentos, sub diario de compra,
        cuentas de gasto, moneda de referencia, otros impuestos y parámetros de
        cuentas.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
