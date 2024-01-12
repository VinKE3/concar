import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import Heading from "@/components/Heading";
import Table from "@/components/Table";
import React from "react";

const ErrorTipo01Factura = () => {
  const data = [
    {
      id: 1,
      title:
        "Validación de Libro Electrónico de Compras - Error en número de serie para el documento de tipo 01 Factura",
      href: "https://miconcar.com/uploads/documentos/853_CONCAR_CB_Validacion_de_libro_electronico_de_compras_error_en_numero_de_serie_para_el_documento_de_tipo_01_factura.pdf",
    },
  ];
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/numero-cero"
      siguienteHref="/tutoriales/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/numero-cero"
    >
      <Heading
        title="Validación de Libro Electrónico de Compras - Error en número de serie para el documento de tipo 01 Factura"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <Table items={data} />
    </Layout>
  );
};
export default ErrorTipo01Factura;
