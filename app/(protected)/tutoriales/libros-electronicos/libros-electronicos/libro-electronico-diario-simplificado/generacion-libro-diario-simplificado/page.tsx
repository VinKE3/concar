"use client";
import Heading from "@/components/Heading";
import { data } from "../../libro-electronico-diario-simplificado/libroElectronicoDiarioSimplificado.data";
import List from "@/components/List";
import Layout from "../../../../layouts/layoutLibrosElectronicos";

const LibroElectronicoRegistroCompraPage = () => {
  const datos = data[0].links;
  console.log(datos);
  return (
    <Layout
      on
      anterior={true}
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos"
      siguiente={true}
      siguienteHref="/tutoriales/libros-electronicos/libro-electronico-registro-ventas"
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

export default LibroElectronicoRegistroCompraPage;
