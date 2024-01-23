import Table from "@/components/Table";
import React from "react";

const TipoCambio = () => {
  const data = [
    {
      id: 1,
      title: "Tipo de Cambio",
      href: "https://miconcar.com/uploads/documentos/295_4.04._CONCAR_SQL_Tipo_de_Cambio_295-D00292.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Es obligatorio registrar el tipo de cambio del primer día (01) del mes
        cuyo cierre contable se desea procesar.
      </p>
      <Table items={data} />
    </div>
  );
};

export default TipoCambio;
