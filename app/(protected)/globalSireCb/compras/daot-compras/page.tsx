import TablaDocumentosRelacionados from "@/components/TablaDocumentosRelacionados";
import Table from "@/components/Table";
import React from "react";

const DaotCompras = () => {
  const data = [
    {
      id: 1,
      title: "DAOT-Compras",
      href: "https://miconcar.com/uploads/documentos/112_CONCAR_CB_Daot_compras.pdf",
    },
  ];
  const data2 = [
    {
      id: 1,
      title:
        "Carga de información en el DAOT - PDT 3500 Operaciones con Terceros",
      description:
        "Como cargar DAOT Compras y Ventas al PDT 3500 Operaciones con Terceros",
      href: "/globalSireCb/sunat/daot-compras",
    },
  ];
  return (
    <div>
      <p>
        El sistema muestra todas las operaciones afectas e inafectas al IGV con
        proveedores, es decir todos los documentos de compras emitidos en el
        ejercicio y registrados en el Registro de Compras.
      </p>
      <Table items={data} />
      <TablaDocumentosRelacionados items={data2} />
    </div>
  );
};

export default DaotCompras;
