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
    {
      id: 2,
      title: "Ventajas de contar con el Real Key",
      description:
        "La llave REAL KEY® es un dispositivo USB de seguridad y protección de software que permitirá el acceso a los productos de Real Systems. La llave de protección se utili...",
      href: "/globalSireCb/generalidades/ventejas-real-key",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Descripción del problema</h1>
      <p>
        Procedimiento para superar mensaje al registrar comprobantes:
        “CC010.FECHA FUERA DE RANGO” en el sistema CONCAR®.
      </p>
      <h1 className="font-bold">Solución al problema</h1>
      <p>
        Actualizar a la versión 2013.031 para versiones con archivo de licencia
        vpl. Esta actualización puede realizarse a través de nuestro sitio Web o
        enviando un CD en blanco con una solicitud simple a Av. Javier Prado
        Oeste 203 Piso 13 San Isidro.
      </p>
      <h1 className="font-bold">
        Cabe resaltar que tendrá que adquirir la llave Real Key para acceder a
        los productos de Real Systems.
      </h1>
      <p>
        El procedimiento para la descarga de la Web, las ventajas y el proceso
        de adquisición de la llave Real Key lo podrán encontrar en la parte
        inferior, apartado {"Documentos Relacionados"}.
      </p>
      <TablaDocumentosRelacionados items={data} />
    </div>
  );
};

export default page;
