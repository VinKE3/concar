import Heading from "@/components/Heading";
import Table from "@/components/Table";
import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Cómo Generar el Libro Electrónico de Compras",
      href: "https://miconcar.com/uploads/documentos/841_CONCAR_SQL_Como_generar_el_libro_electronico_de_compras.pdf",
    },
  ];
  return (
    <Layout
      on
      anterior={true}
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-diario-simplificado/carga-libro-diario-simplificado/como-subsanar-inconsistencias"
      siguiente={true}
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-diario-simplificado/validacion-libro-diario-simplificado/campo-obligatorio-llave-incorrecta"
    >
      <Heading
        title="Validación en PLE-SUNAT de los libros electrónicos Diario, Diario Simplificado y Mayor"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
    </Layout>
  );
};

export default page;
