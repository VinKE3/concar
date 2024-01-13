import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import Heading from "@/components/Heading";
import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Procedimiento para la generación del archivo TXT del libro electrónico de compras de un mes sin movimiento.",
      href: "https://miconcar.com/uploads/documentos/899_CONCAR_SQL_Como_generar_el_libro_electronico_de_compras_de_un_mes_sin_movimiento.pdf",
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
        title="Cómo generar el libro electrónico de compras de un mes sin movimiento"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <p>
        Procedimiento para la generación del archivo TXT del libro electrónico
        de compras de un mes sin movimiento.
      </p>
      <Table items={data} />
    </Layout>
  );
};

export default page;
