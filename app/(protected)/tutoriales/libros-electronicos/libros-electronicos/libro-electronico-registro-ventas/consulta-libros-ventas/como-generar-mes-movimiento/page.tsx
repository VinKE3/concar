import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import Heading from "@/components/Heading";
import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Cómo generar el libro electrónico de ventas de un mes sin movimiento",
      href: "https://miconcar.com/uploads/documentos/907_CONCAR_SQL_Como_generar_el_libro_electronico_de_ventas_de_un_mes_sin_movimiento.pdf",
    },
  ];
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/consulta-libros-ventas"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-diario-simplificado"
    >
      <Heading
        title="Cómo generar el libro electrónico de Ventas de un mes sin movimiento"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />

      <Table items={data} />
    </Layout>
  );
};

export default page;
