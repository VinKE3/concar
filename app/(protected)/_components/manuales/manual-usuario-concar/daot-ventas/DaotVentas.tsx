import TablaDocumentosRelacionados from "@/components/TablaDocumentosRelacionados";
import Table from "@/components/Table";
import React from "react";

const DaotVentas = () => {
  const data = [
    {
      id: 1,
      title: "DAOT- Ventas",
      href: "https://miconcar.com/uploads/documentos/391_CONCAR_SQL_Daot_ventas.pdf",
    },
  ];
  const data2 = [
    {
      id: 1,
      title:
        "Carga de información en el DAOT - PDT 3500 Operaciones con Terceros",
      description:
        "Como cargar DAOT Compras y Ventas al PDT 3500 Operaciones con Terceros",
      href: "/manuales/",
    },
  ];
  return (
    <div>
      <p>
        El sistema muestra todas las operaciones afectas e inafectas al IGV con
        clientes, es decir todos documentos de venta emitidos en el ejercicio y
        registrados en el Registro de Ventas
      </p>
      <Table items={data} />
      <TablaDocumentosRelacionados items={data2} />
    </div>
  );
};

export default DaotVentas;
