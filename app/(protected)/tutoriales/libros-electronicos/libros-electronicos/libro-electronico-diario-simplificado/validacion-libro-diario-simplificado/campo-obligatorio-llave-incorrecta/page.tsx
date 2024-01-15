import Heading from "@/components/Heading";
import Table from "@/components/Table";
import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "El campo es obligatorio / La llave única es incorrecta.",
      href: "https://miconcar.com/uploads/documentos/895_concar_cb_sql_c1_1_Llave_unica_es_incorrecta_v1_.pdf",
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
        title="Validación en PLE-SUNAT: Campo obligatorio / La llave única es incorrecta"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <div>
        <h1>
          Al validar el libro electrónico diario en el PLE-SUNAT, el programa
          detecta los errores El valor es incorrecto y La llave única es
          incorrecta en el reporte de información inconsistente.
        </h1>
        <Table items={data} />
      </div>
    </Layout>
  );
};

export default page;
