import Table from "@/components/Table";
import React from "react";

const ComprobanteHonorarios = () => {
  const data = [
    {
      id: 1,
      title: "entas a No Domiciliados en Libro Electrónico de Ventas",
      href: "https://miconcar.com/uploads/documentos/188_CONCAR_SQL_Ventas_a_no_domiciliados_en_libro_electronico_de_ventas.pdf",
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
