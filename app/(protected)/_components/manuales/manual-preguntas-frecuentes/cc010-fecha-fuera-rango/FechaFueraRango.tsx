import Link from "next/link";
import React from "react";

const FechaFueraRango = () => {
  return (
    <div>
      <h1 className="font-bold">Descripción del problema</h1>
      <p className="mb-10">
        Procedimiento para superar mensaje al registrar comprobantes:
        “CC010.FECHA FUERA DE RANGO” en el sistema CONCAR®
      </p>
      <h1 className="font-bold">Solución al problema</h1>
      <h1 className="mb-5">
        Actualizar a la versión 12.52, puede realizarse a través de nuestro
        sitio Web{" "}
        <Link
          className="text-sky-500 hover:text-sky-600"
          href="http://www.realsystems.com.pe"
        >
          http://www.realsystems.com.pe
        </Link>{" "}
        pestaña Descargas para versiones con archivo de licencia vpl.
      </h1>
      <p className="mb-5">
        Esta actualización puede realizarse a través de nuestro sitio Web o
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
        inferior, apartado Documentos Relacionados.
      </p>
    </div>
  );
};

export default FechaFueraRango;
