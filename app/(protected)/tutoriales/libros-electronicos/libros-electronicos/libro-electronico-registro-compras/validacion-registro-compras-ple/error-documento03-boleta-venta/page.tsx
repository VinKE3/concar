import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import Heading from "@/components/Heading";
import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Validación de Libro Electrónico de Compras - Error en número de serie para el documento de tipo 03 Boleta de Venta",
      href: "https://miconcar.com/uploads/documentos/852_CONCAR_CB_Validacion_de_libro_electronico_de_compras_error_en_numero_de_serie_para_el_documento_de_tipo_03_boleta_de_venta.pdf",
    },
  ];
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/error-documento10-recibo-arrendamiento"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/error-documento06-carta-porte"
    >
      <Heading
        title="Validación de Libro Electrónico de Compras - Error en número de serie para el documento de tipo 03 Boleta de Venta"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <Table items={data} />
    </Layout>
  );
};

export default page;
