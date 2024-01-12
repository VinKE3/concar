import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import Heading from "@/components/Heading";
import List from "@/components/List";
import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Cómo Cargar el Libro Electrónico de Compras al PLE-SUNAT.",
      href: "https://miconcar.com/uploads/documentos/858_CONCAR_CB_Validacion_de_libro_electronico_de_ventas_numero_de_documento_debe_ser_numerico_mayor_a_cero.pdf",
    },
    {
      id: 2,
      title: "Cómo subsanar inconsistencias en el PLE-SUNAT",
      href: "https://miconcar.com/uploads/documentos/858_CONCAR_CB_Validacion_de_libro_electronico_de_ventas_numero_de_documento_debe_ser_numerico_mayor_a_cero.pdf",
    },
    {
      id: 3,
      title:
        "Errores detectados en el PLE-SUNAT al validar el libro electrónico de compras.",
      href: "https://miconcar.com/uploads/documentos/858_CONCAR_CB_Validacion_de_libro_electronico_de_ventas_numero_de_documento_debe_ser_numerico_mayor_a_cero.pdf",
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
        title="Carga del Libro Electrónico de Compras al PLE-SUNAT"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <h1>Este tutorial contiene:</h1>
      <List items={data} />
    </Layout>
  );
};

export default page;
