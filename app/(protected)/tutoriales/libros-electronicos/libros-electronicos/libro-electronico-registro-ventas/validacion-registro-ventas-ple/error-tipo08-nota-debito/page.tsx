import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import Heading from "@/components/Heading";
import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Falta documento de referencia para tipo de documento 08 - Nota de débito",
      href: "https://miconcar.com/uploads/documentos/862_FALTA_DOCUMENTO_DE_REFERENCIA_PARA_DOCUMENTO_TIPO_08.pdf",
    },
  ];
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-documento06-carta-porte"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-tipo55-transporte-ferroviario"
    >
      <Heading
        title="Validación de Libro Electrónico de Ventas - Falta documento de referencia para el documento tipo 08 Nota de Débito"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <Table items={data} />
    </Layout>
  );
};

export default page;
