import Heading from "@/components/Heading";
import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import React from "react";
import { data } from "@/data/libroElectronicoRegistroCompras.data";
import List from "@/components/List";

const GeneracionLibroCompras = () => {
  const datos = data[0].links;
  return (
    <Layout
      on
      anterior={true}
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras"
      siguiente={true}
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/generacion-libro-electronico-compras/como-generar-libro-compras"
    >
      <Heading
        title="Generación del Libro Electrónico de Compras"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <h1>Este tutorial contiene:</h1>
      <List items={datos} />
    </Layout>
  );
};

export default GeneracionLibroCompras;
