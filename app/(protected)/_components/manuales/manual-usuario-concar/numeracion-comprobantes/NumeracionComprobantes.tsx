import Table from "@/components/Table";
import React from "react";

const NumeracionComprobantes = () => {
  const data = [
    {
      id: 1,
      title: "Numeración de Comprobantes",
      href: "https://miconcar.com/uploads/documentos/297_4.06._CONCAR_SQL_Numeracion_de_Comprobantes_297-D00294.pdf",
    },
  ];
  return (
    <div>
      <h1>
        En esta tabla se muestra el último número de comprobante generado en
        forma automática por cada subdiario y mes, se actualiza automáticamente
        al registrar los comprobantes con numeración automática, pero puede ser
        modificada cuando se requiera. Por ejemplo: Si eliminó un comprobante y
        siguió ingresando comprobantes, para reutilizar el mismo número de
        comprobante que eliminó, deberá ingresar el correlativo anterior.
      </h1>
      <Table items={data} />
    </div>
  );
};

export default NumeracionComprobantes;
