import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import Heading from "@/components/Heading";
import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Cómo Cargar el Libro Electrónico de Ventas al PLE-SUNAT",
      href: "https://miconcar.com/uploads/documentos/846_CONCAR_SQL_Como_cargar_el_libro_electronico_de_ventas_al_ple_sunat.pdf",
    },
  ];
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/carga-libro-ventas-ple"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/carga-libro-ventas-ple/subsanar-inconsistencias"
    >
      <Heading
        title="Cómo Cargar el Libro Electrónico de Ventas  al PLE-SUNAT"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <Table items={data} />
    </Layout>
  );
};

export default page;
