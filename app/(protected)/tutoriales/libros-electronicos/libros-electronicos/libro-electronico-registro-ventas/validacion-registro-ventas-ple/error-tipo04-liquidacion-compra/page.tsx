import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import Heading from "@/components/Heading";
import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Validación de Libro Electrónico de Ventas - Error número de serie para el documento de tipo 04 Liquidación de Compra",
      href: "https://miconcar.com/uploads/documentos/865_CONCAR_CB_Validacion_de_libro_electronico_de_ventas_error_en_el_numero_de_serie_para_el_documento_de_tipo_04_liquidacion_de_compra.pdf",
    },
  ];
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-documento03-boleta-venta"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-tipo05-boleto-aereo"
    >
      <Heading
        title="Validación de Libro Electrónico de Ventas - Error número de serie para el documento de tipo 04 Liquidación de Compra"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <Table items={data} />
    </Layout>
  );
};

export default page;
