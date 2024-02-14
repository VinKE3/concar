import Container from "@/components/Container";
import Indice from "@/components/Indice";
import React from "react";
import { generaCompra } from "@/data/concarSireCb.data";
import Heading from "@/components/Heading";

const ConcarSireCbCompras = () => {
  return (
    <Container>
      <Heading
        title="Genera Preliminar y Compara Compras Electrónicos - RCE"
        subtitle="Funcionalidad Generación Registro de Compras"
        className="py-6"
        button
        buttonTitle="Volver a Tutoriales"
        buttonHref="/tutoriales"
      />
      <Heading title="índice" className="bg-gray-200 px-2" />
      <Indice items={generaCompra} />
    </Container>
  );
};

export default ConcarSireCbCompras;
