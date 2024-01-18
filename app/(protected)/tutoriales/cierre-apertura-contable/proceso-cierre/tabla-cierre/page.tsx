import React from "react";
import Layout from "../../../layouts/layoutCierreApertura";
import Heading from "@/components/Heading";
import Table from "@/components/Table";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Tabla de Cierre",
      href: "https://miconcar.com/uploads/documentos/895_concar_cb_sql_c1_1_Llave_unica_es_incorrecta_v1_.pdf",
    },
    {
      id: 2,
      title: "Tabla de cierre - Cabecera",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/12/298_CICXX.DBF",
    },
    {
      id: 3,
      title: "Tabla de Cierre - Detalle",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/12/298_CIDXX.DBF",
    },
  ];
  return (
    <Layout
      indice="/tutoriales/cierre-apertura-contable"
      anterior={true}
      anteriorHref="/tutoriales/cierre-apertura-contable/proceso-cierre"
      siguiente={true}
      siguienteHref="/tutoriales/cierre-apertura-contable/proceso-apertura"
    >
      <Heading
        title="Proceso de Cierre"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <p>
        En esta tabla ya viene configurada con los asientos automáticos de
        cierre del ejercicio, son 17 asientos de cierre. Primero, se debe
        establecer la secuencia de los asientos de cierre y las cuentas que se
        van a cerrar o transferir en cada paso. Cada asiento de cierre se
        identifica por un número de asiento y generará automáticamente un
        comprobante contable.
      </p>
      <Table items={data} />
    </Layout>
  );
};

export default page;
