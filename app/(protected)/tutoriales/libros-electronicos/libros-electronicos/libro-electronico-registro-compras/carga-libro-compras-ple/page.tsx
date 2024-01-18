import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import Heading from "@/components/Heading";
import List from "@/components/List";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Cómo Cargar el Libro Electrónico de Compras al PLE-SUNAT.",
      href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/carga-libro-compras-ple/como-cargar-libro-compras",
    },
    {
      id: 2,
      title: "Cómo subsanar inconsistencias en el PLE-SUNAT",
      href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/carga-libro-compras-ple/como-subsanar-inconsistencias",
    },
    {
      id: 3,
      title:
        "Errores detectados en el PLE-SUNAT al validar el libro electrónico de compras.",
      href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/carga-libro-compras-ple/errores-detectados-libro-compras",
    },
  ];
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/error-tipo55-transporte-ferroviario"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/carga-libro-compras-ple/como-cargar-libro-compras"
    >
      <Heading
        title="Carga del Libro Electrónico de Compras al PLE-SUNAT"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <h1>Este tutorial contiene:</h1>
      <List items={data} />
    </Layout>
  );
};

export default page;
