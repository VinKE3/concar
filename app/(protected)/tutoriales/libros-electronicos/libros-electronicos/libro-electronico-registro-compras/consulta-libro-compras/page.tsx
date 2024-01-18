import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import Heading from "@/components/Heading";
import Table from "@/components/Table";
import React from "react";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validar-libro-electronico-compras/valor-incorrecto"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/consulta-libro-compras/como-generar-mes-movimiento"
    >
      <Heading
        title="Consultas Libro Electrónico de Compras"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
    </Layout>
  );
};

export default page;
