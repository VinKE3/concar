import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import Heading from "@/components/Heading";
import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Errores detectados en el PLE-SUNAT al validar el libro electrónico de ventas",
      href: "https://miconcar.com/uploads/documentos/880_CONCAR_SQL_Errores_detectados_en_el_ple_sunat_al_validar_el_libro_electronico_ventas.pdf",
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
        title="Errores detectados en el PLE-SUNAT al validar el libro electrónico de ventas"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <p>
        El reporte de información inconsistente brinda un detalle de todos los
        errores detectados por el PLE-SUNAT durante la validación del libro
        electrónico, señalando la ubicación del error.
      </p>
      <Table items={data} />
    </Layout>
  );
};

export default page;
