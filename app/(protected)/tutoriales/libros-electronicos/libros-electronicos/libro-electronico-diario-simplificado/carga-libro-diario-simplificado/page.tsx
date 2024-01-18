"use client";
import Heading from "@/components/Heading";
import { data } from "../../libro-electronico-diario-simplificado/libroElectronicoDiarioSimplificado.data";
import List from "@/components/List";
import Layout from "../../../../layouts/layoutLibrosElectronicos";

const page = () => {
  const datos = data[1].links;
  return (
    <Layout
      on
      anterior={true}
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-diario-simplificado/generacion-libro-diario-simplificado/registro-omisiones-libro-diario-simplificado"
      siguiente={true}
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-diario-simplificado/carga-libro-diario-simplificado/como-cargar-libro-diario"
    >
      <Heading
        title="Generación de los Libros Electrónicos Diario, Diario Simplificado y Mayor"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <h1>Este tutorial contiene:</h1>
      <List items={datos} />
    </Layout>
  );
};

export default page;
