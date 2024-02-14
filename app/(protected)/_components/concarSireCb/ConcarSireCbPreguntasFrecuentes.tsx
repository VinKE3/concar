import Container from "@/components/Container";
import Indice from "@/components/Indice";
import React from "react";
import { preguntasFrecuentes } from "@/data/concarSireCb.data";
import Heading from "@/components/Heading";

const ConcarSireCbPreguntasFrecuentes = () => {
  return (
    <Container>
      <Heading
        title="Preguntas Frecuentes CONCAR SIRE CB"
        subtitle="Preguntas Frecuentes relacionados al sistema CONCAR SIRE CB"
        className="py-6"
        button
        buttonTitle="Volver a Tutoriales"
        buttonHref="/tutoriales"
      />
      <Heading title="índice" className="bg-gray-200 px-2" />
      <Indice items={preguntasFrecuentes} />
    </Container>
  );
};

export default ConcarSireCbPreguntasFrecuentes;
