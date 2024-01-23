import Table from "@/components/Table";
import React from "react";

const ReportesEstadosCuenta = () => {
  const data = [
    {
      id: 1,
      title: "entas a No Domiciliados en Libro Electrónico de Ventas",
      href: "https://miconcar.com/uploads/documentos/188_CONCAR_SQL_Ventas_a_no_domiciliados_en_libro_electronico_de_ventas.pdf",
    },
  ];
  return (
    <div>
      <p>
        Esta opción contiene reportes en los que se podrán apreciar los cargos,
        abonos y saldos{" "}
      </p>
      <Table items={data} />
    </div>
  );
};

export default ReportesEstadosCuenta;
