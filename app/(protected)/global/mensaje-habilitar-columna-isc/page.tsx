import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso</h1>
      <p>
        Mensaje Habilitar Columna ISC en la emisión del libro oficial impreso
        Formato 8.1 Registro de Compras:
      </p>
      <Image
        alt="mensaje-habilitar-columna-isc"
        src="https://miconcar.com/uploads/documentos/DOC21.jpg"
        width={500}
        height={500}
      />
      <h1 className="font-bold">Solución:</h1>
      <p>
        Este mensaje se presenta cuando se ha configurado el campo Cuenta de ISC
        en la ceja Parámetros Varios de Reportes/Libros y Registros
        Oficiales/Registros de Compras/Mantenimiento Parámetros Registro Compras
        y no se ha activado la casilla ISC.
      </p>
      <p>Por lo expuesto, la solución según sea el caso:</p>
      <p>
        1. Si no se tienen compras con impuesto selectivo al consumo (I.S.C.),
        borrar la cuenta configura para dicho fin en Parámetros Varios de
        Reportes/Libros y Registros Oficiales/Registros de Compras/Mantenimiento
        Parámetros Registro Compras:
      </p>
      <Image
        alt="mensaje-habilitar-columna-isc"
        src="https://miconcar.com/uploads/documentos/concar_sql_2_compras_con_isc_v1.jpg"
        width={500}
        height={500}
      />
      <p>
        2. Si se tienen compras con impuesto selectivo al consumo (I.S.C.),
        activar la casilla ISC en la ceja Formato 8.1 R. Compras de
        Reportes/Libros y Registros Oficiales/Registros de Compras/Mantenimiento
        Parámetros Registro Compras:
      </p>
      <Image
        alt="mensaje-habilitar-columna-isc"
        src="https://miconcar.com/uploads/documentos/DOC3.jpg"
        width={500}
        height={500}
      />
      <p>
        3. Luego de paso 1 ó 2, grabar y volver a generar el archivo mensual de
        compras.
      </p>
    </div>
  );
};

export default page;
