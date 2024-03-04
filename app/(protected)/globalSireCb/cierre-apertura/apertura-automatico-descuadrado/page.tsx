import TablaDocumentosRelacionados from "@/components/TablaDocumentosRelacionados";
import React from "react";

const page = () => {
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
        <p>Asiento de Apertura automático se genera descuadrado.</p>
      </div>

      <div className="space-y-2">
        <h1 className="font-bold">Solución al problema</h1>
        <p>
          Verificar proceso de cierre consultando el instructivo de
          Configuración y proceso de Cierre Contable y reapertura incluido en
          documentos relacionados más abajo.
        </p>
      </div>
      {/* <TablaDocumentosRelacionados items={data} /> */}
    </>
  );
};

export default page;
