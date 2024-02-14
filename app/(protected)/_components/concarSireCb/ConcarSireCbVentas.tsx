import Container from "@/components/Container";
import Indice from "@/components/Indice";
import React from "react";
import { generaVenta } from "@/data/concarSireCb.data";
import Heading from "@/components/Heading";

const ConcarSireCbVentas = () => {
  return (
    <Container>
      <Heading
        title="Genera Preliminar y Compara Registro de Ventas Electrónicas - RVIE"
        subtitle="Funcionalidad Generación Registro de Ventas"
        className="py-6"
        button
        buttonTitle="Volver a Tutoriales"
        buttonHref="/tutoriales"
      />
      <Heading title="índice" className="bg-gray-200 px-2" />
      <Indice items={generaVenta} />
    </Container>
  );
};

export default ConcarSireCbVentas;
