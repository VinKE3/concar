import Table from "@/components/Table";
import React from "react";

const ReportesMayores = () => {
  const data = [
    {
      id: 1,
      title: "Mayores",
      href: "https://miconcar.com/uploads/documentos/328_CONCAR_SQL_Mayores.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Incluye reportes de Libros Mayores anteriores y no oficiales.</p>
      <p>
        En algunos casos, se pueden utilizar cuentas resumidas para el Mayor por
        no guardar un mayor análisis del movimiento contable y ahorrar papel,
        mientras que otras cuentas contables no aplican para ser mostradas en
        resumen. Esta configuración solo aplica a los libros impresos, no al
        libro electrónico.
      </p>
      <Table items={data} />
    </div>
  );
};

export default ReportesMayores;
