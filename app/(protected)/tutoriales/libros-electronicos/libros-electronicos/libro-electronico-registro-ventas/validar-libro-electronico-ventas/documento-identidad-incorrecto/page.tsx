import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import Heading from "@/components/Heading";
import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "El número de documento de identidad es incorrecto.",
      href: "https://miconcar.com/uploads/documentos/903_concar_cb_sql_c1_1_documento_identidad_incorrecto_v1_.pdf",
    },
  ];
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validar-libro-electronico-ventas"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validar-libro-electronico-ventas/valor-incorrecto"
    >
      <Heading
        title="Validación en PLE-SUNAT: El número de documento de identidad es incorrecto"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <p>
        Al validar el libro electrónico de compras o ventas en el PLE-SUNAT, el
        programa detecta el error El número de documento de identidad es
        incorrecto en el reporte de información inconsistente.
      </p>
      <Table items={data} />
    </Layout>
  );
};

export default page;
