import TablaDocumentosRelacionados from "@/components/TablaDocumentosRelacionados";
import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
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
    <div className="space-y-3">
      <h1 className="font-bold">Descripción del problema</h1>
      <p>Error No Coinciden los Tipos en Libro Electrónico de Ventas.</p>
      <h1 className="font-bold">Solución al problema</h1>
      <p>
        Actualizar a la Versión 2013.05 o posterior. Ver forma de descargar de
        la Web más abajo en documentos relacionados.
      </p>
      <TablaDocumentosRelacionados items={data} />
    </div>
  );
};

export default page;
