import Table from "@/components/Table";
import React from "react";

const ComprobanteHonorarios = () => {
  const data = [
    {
      id: 1,
      title: "Comprobante de Honorarios",
      href: "https://miconcar.com/uploads/documentos/314_5.09_CONCAR_SQL_Comprobante_de_honorarios_314-D00311.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Esta opción permite registrar los comprobantes de honorarios en forma
        simplificada y automatizada. El sistema genera en forma automática el
        abono a la cuenta 424XXX de Honorarios por pagar, 40XXXX por el Impuesto
        a la renta y el cargo a la 63XXXX por el gasto por Honorarios.
      </p>
      <Table items={data} />
    </div>
  );
};

export default ComprobanteHonorarios;
