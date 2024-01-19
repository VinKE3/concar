import Container from "@/components/Container";
import Indice from "@/components/Indice";
import React from "react";
import { dataSubLibros } from "@/data/librosElectronicos.data";
import Heading from "@/components/Heading";

const LibrosElectronicosMain = () => {
  return (
    <Container>
      <Heading
        title="¿Cómo Generar Libros Electrónicos?"
        subtitle="CONCAR® SIRE SQL"
        className="py-6"
        button
        buttonTitle="Volver a Tutoriales"
        buttonHref="/tutoriales"
      />
      <Indice items={dataSubLibros} />
    </Container>
  );
};

export default LibrosElectronicosMain;
