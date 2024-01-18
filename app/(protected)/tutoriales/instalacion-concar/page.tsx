import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Indice from "@/components/Indice";
import React from "react";

const InstalacionConcarPage = () => {
  return (
    <Container>
      <div className="py-4">
        {" "}
        <Heading
          title="Instalación y Actualización del Concar"
          subtitle="Proceso de Instalación y Actualización del Concar SQL"
          button
          buttonTitle="Volver a Tutoriales"
          buttonHref="/tutoriales"
        />
      </div>
      <Indice
        id={1}
        title="¿Cómo realizar el Proceso de Actualización de la Versión RK en el Concar SQL? - Incluye Video"
        description="Procedimiento para la Actualización del CONCAR SQL"
        href="/tutoriales/instalacion-concar/proceso-actualizacion-concar-sql"
      />
    </Container>
  );
};

export default InstalacionConcarPage;
