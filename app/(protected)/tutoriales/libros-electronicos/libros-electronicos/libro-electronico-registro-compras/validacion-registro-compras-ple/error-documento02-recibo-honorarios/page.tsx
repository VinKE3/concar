import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import Heading from "@/components/Heading";
import Table from "@/components/Table";
import React from "react";

const ErrorDocumentoReciboHonorarios = () => {
  const data = [
    {
      id: 1,
      title:
        "Validación de Libro Electrónico de Compras - Error en número de serie para tipo de documento 02 Recibo por Honorarios",
      href: "https://miconcar.com/uploads/documentos/855_CONCAR_CB_Validacion_de_libro_electronico_de_compras_error_en_numero_de_serie_para_el_documento_de_tipo_02_recibo_por_honorarios.pdf",
    },
  ];
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/documento-codigo6-ruc"
      siguienteHref="/utoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/error-documento10-recibo-arrendamiento"
    >
      <Heading
        title="Validación de Libro Electrónico de Compras - Error en número de serie para tipo de documento 02 Recibo por Honorarios"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <Table items={data} />
    </Layout>
  );
};

export default ErrorDocumentoReciboHonorarios;
