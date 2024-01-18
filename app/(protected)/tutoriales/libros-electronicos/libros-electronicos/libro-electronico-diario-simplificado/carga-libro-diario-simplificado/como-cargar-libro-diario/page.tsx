import Heading from "@/components/Heading";
import Table from "@/components/Table";
import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Validación y Envío al PLE-SUNAT - Libros electrónicos Diario, Diario Simplificado y Mayor.",
      href: "https://miconcar.com/uploads/documentos/848_VALIDACION_DE_LIBRO_ELECTRONICO_DIARIO,_DIARIO_SIMPLIFICADO_Y_MAYOR_CONCAR_CB_SQL.pdf",
    },
  ];
  return (
    <Layout
      on
      anterior={true}
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-diario-simplificado/carga-libro-diario-simplificado"
      siguiente={true}
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-diario-simplificado/carga-libro-diario-simplificado/como-subsanar-inconsistencias"
    >
      <Heading
        title="Cómo Cargar los Libros Electrónicos Diario, Diario Simplificado y Mayor al PLE-SUNAT"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <div>
        <Table items={data} />
      </div>
    </Layout>
  );
};

export default page;
