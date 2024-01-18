import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import Heading from "@/components/Heading";
import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Validación y Envío al PLE-SUNAT - Libro Electrónico de Compras.",
      href: "https://miconcar.com/uploads/documentos/847_VALIDACION_DE_LIBRO_ELECTRONICO_DE_COMPRAS_CONCAR_CB_SQL1.pdf",
    },
  ];
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/carga-libro-compras-ple"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/carga-libro-compras-ple/como-subsanar-inconsistencias"
    >
      <Heading
        title="Cómo Cargar el Libro Electrónico de Compras al PLE-SUNAT"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <Table items={data} />
    </Layout>
  );
};

export default page;
