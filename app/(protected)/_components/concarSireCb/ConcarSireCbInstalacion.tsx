import Container from "@/components/Container";
import Indice from "@/components/Indice";
import React from "react";
import { instalacion } from "@/data/concarSireCb.data";
import Heading from "@/components/Heading";

const ConcarSireCbInstalacion = () => {
  return (
    <Container>
      <Heading
        title="Instalación y Actualización"
        subtitle="Se explica procedimiento"
        className="py-6"
        button
        buttonTitle="Volver a Tutoriales"
        buttonHref="/tutoriales"
      />
      <Heading title="índice" className="bg-gray-200 px-2" />
      <Indice items={instalacion} />
    </Container>
  );
};

export default ConcarSireCbInstalacion;
