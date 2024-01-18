import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import Heading from "@/components/Heading";
import Table from "@/components/Table";
import React from "react";

const ErrorTipo01Factura = () => {
  const data = [
    {
      id: 1,
      title: "Error en serie de tipo de documento 01 - Factura.",
      href: "https://miconcar.com/uploads/documentos/861_ERROR_SERIE_TIPO_DE_DOCUMENTO_FACTURA.pdf",
    },
  ];
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/numero-numerico-mayor-cero"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-documento03-boleta-venta"
    >
      <Heading
        title="Validación de Libro Electrónico de Ventas - Error en el número de serie para el documento de tipo 01 Factura"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <Table items={data} />
    </Layout>
  );
};
export default ErrorTipo01Factura;
