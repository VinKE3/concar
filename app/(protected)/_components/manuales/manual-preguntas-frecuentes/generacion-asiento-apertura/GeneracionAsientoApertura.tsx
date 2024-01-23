import TablaDocumentosRelacionados from "@/components/TablaDocumentosRelacionados";
import React from "react";

const GeneracionAsientoApertura = () => {
  const data = [
    {
      id: 1,
      title: "CIERRE - Proceso de Cierre",
      description:
        "Procedimiento para poder realizar el proceso de Cierre Contable en el sistema CONCAR®",
      href: "/manuales/manual-preguntas-frecuentes/proceso-cierre",
    },
  ];
  return (
    <>
      <div className="space-y-2">
        <h1 className="font-bold">Descripción del problema</h1>
        <p>Cómo generar el Asiento de Apertura en forma automática.</p>
      </div>
      <div className="space-y-2">
        <h1 className="font-bold">Solución al problema</h1>
        <p>
          Revisar proceso de Configuración y proceso de Cierre Contable y
          reapertura en el documento relacionado de más abajo.
        </p>
      </div>
      <TablaDocumentosRelacionados items={data} />
    </>
  );
};

export default GeneracionAsientoApertura;
