import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import Heading from "@/components/Heading";
import List from "@/components/List";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Cómo Cargar el Libro Electrónico de Ventas al PLE-SUNAT.",
      href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/carga-libro-ventas-ple/como-cargar-libro-ventas",
    },
    {
      id: 2,
      title: "Cómo subsanar inconsistencias en el PLE-SUNAT",
      href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/carga-libro-ventas-ple/subsanar-inconsistencias",
    },
    {
      id: 3,
      title:
        "Errores detectados en el PLE-SUNAT al validar el libro electrónico de ventas.",
      href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/carga-libro-ventas-ple/errores-detectados-libro-ventas",
    },
  ];
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-tipo55-transporte-ferroviario"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/carga-libro-ventas-ple/como-cargar-libro-ventas"
    >
      <Heading
        title="Carga del Libro Electrónico de Ventas al PLE-SUNAT"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <h1>Este tutorial contiene:</h1>
      <List items={data} />
    </Layout>
  );
};

export default page;
