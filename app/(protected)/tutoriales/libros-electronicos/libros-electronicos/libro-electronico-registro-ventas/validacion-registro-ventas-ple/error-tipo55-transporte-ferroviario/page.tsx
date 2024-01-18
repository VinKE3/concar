import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import Heading from "@/components/Heading";
import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Error número de serie para el documento de tipo 55 BVME para transporte ferroviario de pasajeros.",
      href: "https://miconcar.com/uploads/documentos/873_concar_cb_sql_c1_1_error_serie_bvme_transporte_ferroviario_v1_.pdf",
    },
  ];
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-tipo08-nota-debito"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/carga-libro-ventas-ple"
    >
      <Heading
        title="Validación de Libro Electrónico de Ventas - Error número de serie para el documento de tipo 55 BVME para transporte ferroviario de pasajeros"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <Table items={data} />
    </Layout>
  );
};

export default page;
