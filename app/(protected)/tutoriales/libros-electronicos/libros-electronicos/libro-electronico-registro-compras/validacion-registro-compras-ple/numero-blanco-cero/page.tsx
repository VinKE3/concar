import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import Heading from "@/components/Heading";
import Table from "@/components/Table";
import React from "react";

const NumeroBlancoCero = () => {
  const data = [
    {
      id: 1,
      title:
        "Validación de Libro Electrónico de Compras - Número de documento no debe estar en blanco o en cero",
      href: "https://miconcar.com/uploads/documentos/858_CONCAR_CB_Validacion_de_libro_electronico_de_ventas_numero_de_documento_debe_ser_numerico_mayor_a_cero.pdf",
    },
  ];
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/numero-serie-obligatoria"
    >
      <Heading
        title="Validación de Libro Electrónico de Compras - Número de documento no debe estar en blanco o en cero"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <Table items={data} />
    </Layout>
  );
};

export default NumeroBlancoCero;
