import React from "react";
import Layout from "../../layouts/layoutCierreApertura";
import Heading from "@/components/Heading";

const page = () => {
  return (
    <Layout
      indice="/tutoriales/cierre-apertura-contable"
      anterior={true}
      anteriorHref="/tutoriales/cierre-apertura-contable/proceso-cierre/tabla-cierre"
      siguiente={true}
      siguienteHref="/tutoriales/cierre-apertura-contable/proceso-apertura/asiento-apertura"
    >
      <Heading
        title="Proceso Apertura"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <p>Como generar el asiento de Apertura.</p>
    </Layout>
  );
};

export default page;
