import Heading from "@/components/Heading";
import Table from "@/components/Table";
import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import React from "react";

const ComoGenerarLibroVentas = () => {
  const data = [
    {
      id: 1,
      title: "Cómo Generar el Libro Electrónico de Ventas",
      href: "https://miconcar.com/uploads/documentos/842_COMO_GENERAR_LIBROS_ELECTRÓNICOS_DE_VENTAS.pdf",
    },
  ];
  return (
    <Layout
      on
      anterior={true}
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/generacion-libro-electronico-ventas"
      siguiente={true}
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/generacion-libro-electronico-ventas/estado-indicador-libro-ventas"
    >
      <Heading
        title="¿Cómo Generar el Libro Electrónico de Ventas?"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <div>
        <h1>
          El presente documento detalla el procedimiento a realizar en el CONCAR
          para generar el libro electrónico de ventas.
        </h1>
        <Table items={data} />
      </div>
    </Layout>
  );
};

export default ComoGenerarLibroVentas;
