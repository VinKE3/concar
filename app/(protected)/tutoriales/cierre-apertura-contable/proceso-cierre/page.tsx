import React from "react";
import Layout from "../../layouts/layoutCierreApertura";
import Heading from "@/components/Heading";

const page = () => {
  return (
    <Layout
      indice="/tutoriales/cierre-apertura-contable"
      siguiente={true}
      siguienteHref="/tutoriales/cierre-apertura-contable/proceso-cierre/tabla-cierre"
    >
      <Heading
        title="Proceso de Cierre"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <p>
        Procedimiento para poder realizar el proceso de Cierre Contable en el
        sistema CONCAR®
      </p>
    </Layout>
  );
};

export default page;
