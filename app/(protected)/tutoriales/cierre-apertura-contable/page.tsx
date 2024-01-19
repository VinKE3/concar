import Container from "@/components/Container";
import Indice from "@/components/Indice";
import React from "react";
import { dataCierreAperturaContable, dataProcesoApertura } from "./cierre.data";
import Heading from "@/components/Heading";

const CierreAperturaPage = () => {
  return (
    <Container>
      <div className="py-4">
        <Heading
          title="Cierre y Apertura Contable"
          subtitle="Proceso de Cierre y Apertura contable."
          button
          buttonTitle="Volver a Tutoriales"
          buttonHref="/tutoriales"
        />
      </div>
      <Heading title="Indice" />
      <Indice items={dataCierreAperturaContable} />
      <Indice items={dataProcesoApertura} />
    </Container>
  );
};

export default CierreAperturaPage;
