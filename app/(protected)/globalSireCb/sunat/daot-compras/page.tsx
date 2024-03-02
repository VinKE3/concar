import TablaDocumentosRelacionados from "@/components/TablaDocumentosRelacionados";
import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Carga de información en el DAOT - PDT 3500 Operaciones con Terceros",
      href: "https://miconcar.com/uploads/documentos/671_CONCAR_SQL_Carga_de_informacion_en_el_daot_pdt_3500_operaciones_con_terceros.pdf",
    },
  ];
  const data2 = [
    {
      id: 1,
      title: "DAOT Compras",
      description:
        "El sistema muestra todas las operaciones afectas e inafectas al IGV con proveedores, es decir todos los documentos de compras emitidos en el ejercicio y registrados en el ...",
      href: "/globalSireCb/compras/daot-compras",
    },
    {
      id: 2,
      title: "DAOT Ventas",
      description:
        "El sistema muestra todas las operaciones afectas e inafectas al IGV con clientes, es decir todos documentos de venta emitidos en el ejercicio y registrados en el Registro ...",
      href: "/globalSireCb/ventas/daot-ventas",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Para cargar la información generada en Concar al PDT 3500 DAOT tanto
        para compras como para ventas debe realizar los pasos del manual
        adjunto.
      </p>
      <Table items={data} />
      <TablaDocumentosRelacionados items={data2} />
    </div>
  );
};

export default page;
