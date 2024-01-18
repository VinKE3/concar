"use client";
import Heading from "@/components/Heading";
import { data } from "../../libros-electronicos/libro-electronico-diario-simplificado/libroElectronicoDiarioSimplificado.data";
import List from "@/components/List";
import Layout from "../../../layouts/layoutLibrosElectronicos";

const LibroElectronicoRegistroCompraPage = () => {
  return (
    <Layout
      on
      anterior={true}
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/consulta-libros-ventas/como-generar-mes-movimiento"
      siguiente={true}
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-diario-simplificado/generacion-libro-diario-simplificado"
    >
      <Heading
        title="Libros Electrónicos Diario, Diario Simplificado y Mayor"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <h1>Este tutorial contiene:</h1>
      {data.map(({ id, title, href, links }) => {
        return (
          <div key={id}>
            <List title={title} href={href} items={links} />
          </div>
        );
      })}
    </Layout>
  );
};

export default LibroElectronicoRegistroCompraPage;
