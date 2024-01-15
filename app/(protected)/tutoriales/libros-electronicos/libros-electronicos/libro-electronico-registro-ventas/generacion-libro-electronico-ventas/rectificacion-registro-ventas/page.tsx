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
      anteriorHref="/tutoriales/libros-electronicos/libro-electronico-registro-compras"
      siguiente={true}
      siguienteHref="/tutoriales/libros-electronicos/libro-electronico-registro-ventas"
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
