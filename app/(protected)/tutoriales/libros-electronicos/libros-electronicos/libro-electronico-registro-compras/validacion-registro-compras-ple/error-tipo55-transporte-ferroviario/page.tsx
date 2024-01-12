import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import Heading from "@/components/Heading";
import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Validación de Libro Electrónico de Compras - Error número de serie para el documento de tipo 55 BVME para transporte ferroviario de pasajeros",
      href: "https://miconcar.com/uploads/documentos/874_CONCAR_CB_Validacion_de_libro_electronico_de_compras_error_en_numero_de_serie_para_el_documento_de_tipo_55_bvme_para_transporte_ferroviario.pdf",
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
        title="Validación de Libro Electrónico de Compras - Error número de serie para el documento de tipo 55 BVME para transporte ferroviario de pasajeros"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <Table items={data} />
    </Layout>
  );
};

export default page;
