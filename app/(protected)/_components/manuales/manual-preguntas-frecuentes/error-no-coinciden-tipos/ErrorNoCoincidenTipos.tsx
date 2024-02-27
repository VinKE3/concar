import TablaDocumentosRelacionados from "@/components/TablaDocumentosRelacionados";
import React from "react";

const ErrorNoCoincidenTipos = () => {
  const data = [
    {
      id: 1,
      title:
        "¿Cómo descargar la nueva versión del Portal miCONCAR? - Incluye Video",
      description:
        "A continuación se indica como podrán realizar la descarga de las actualizaciones del sistema",
      href: "/globalSireCb/instalacion-actualizacion/descargar-nueva-version-portal-miconcar",
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
          Actualizar a la Versión 2013.05 o posterior. Ver forma de descargar de
          la Web más abajo en documentos relacionados.
        </p>
        <TablaDocumentosRelacionados items={data} />
      </div>
    </>
  );
};

export default ErrorNoCoincidenTipos;
