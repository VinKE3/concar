import TablaDocumentosRelacionados from "@/components/TablaDocumentosRelacionados";
import React from "react";

const ErrorNoCoincidenTipos = () => {
  const data = [
    {
      id: 1,
      title: "Descarga Versión desde miCONCAR®",
      description: "Forma de descargar Versión desde miCONCAR®.",
      href: "/manuales/manual-preguntas-frecuentes/descarga-version",
    },
  ];
  return (
    <>
      <div className="py-5">
        <h1 className="font-bold">Descripción del problema</h1>
        <p>Error No Coinciden los Tipos en Libro Electrónico de Ventas.</p>
      </div>
      <div>
        <h1 className="font-bold">Solución al problema</h1>
        <p>
          Actualizar a la Versión 12.52 con vpl o la versión 13.12 o posterior
          con RK.
        </p>
        <p>
          Ver forma de descargar de la Web más abajo en documentos relacionados.
        </p>
        <TablaDocumentosRelacionados items={data} />
      </div>
    </>
  );
};

export default ErrorNoCoincidenTipos;
