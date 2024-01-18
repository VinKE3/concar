import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import Heading from "@/components/Heading";
import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Error en serie para el documento de tipo 05 Boleto Aéreo.",
      href: "https://miconcar.com/uploads/documentos/863_concar_cb_sql_c1_1_error_serie_boleta_aereo_v1_2.pdf",
    },
  ];
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-tipo04-liquidacion-compra"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-documento06-carta-porte"
    >
      <Heading
        title="Validación de Libro Electrónico de Ventas - Error número de serie para el documento de tipo 05 Boleto Aéreo"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <Table items={data} />
    </Layout>
  );
};

export default page;
