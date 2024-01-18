import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import Heading from "@/components/Heading";
import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Fecha de documento de referencia no debe ser mayor a fecha de documento para el tipo de documento 07 - Nota de crédito.",
      href: "https://miconcar.com/uploads/documentos/867_concar_cb_sql_c1_1_fecha_de_documento_referencia_no_debe_ser_mayor_a_fecha_de_documento_v1_.pdf",
    },
  ];
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/fecha-documento-mayor-documento07"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/fecha-vencimiento-documento14"
    >
      <Heading
        title="Validación de Libro Electrónico de Compras - Fecha de documento de referencia no debe ser mayor a fecha de documento para el tipo de documento 07 Nota de crédito"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <Table items={data} />
    </Layout>
  );
};

export default page;
