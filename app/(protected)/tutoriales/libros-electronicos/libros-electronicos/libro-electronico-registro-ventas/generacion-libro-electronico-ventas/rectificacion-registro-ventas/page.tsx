import Heading from "@/components/Heading";
import Table from "@/components/Table";
import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import React from "react";

const RectificacionRegistroVentas = () => {
  const data = [
    {
      id: 1,
      title: "Registros Adicionales en Registro de Ventas.",
      href: "https://miconcar.com/uploads/documentos/869_concar_cb_sql_registros_adicionales_registro_de_ventas_v12.pdf",
    },
  ];
  return (
    <Layout
      on
      anterior={true}
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/generacion-libro-electronico-ventas/estado-indicador-libro-ventas"
      siguiente={true}
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple"
    >
      <Heading
        title="Rectificación u Omisión: Registros Adicionales en Registro de Ventas Electrónico"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <Table items={data} />
    </Layout>
  );
};

export default RectificacionRegistroVentas;
