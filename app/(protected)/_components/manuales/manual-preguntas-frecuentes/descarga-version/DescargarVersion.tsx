import Image from "next/image";
import Link from "next/link";
import React from "react";

const DescargarVersion = () => {
  return (
    <>
      <div className="mb-5">
        <h1 className="font-bold">Descripción del problema</h1>
        <h1>
          Forma de descargar Versión desde miCONCAR®
          <Link
            className="text-sky-500 hover:text-sky-600"
            href="www.miconcar.com"
          >
            www.miconcar.com.
          </Link>
        </h1>
      </div>
      <div>
        <h1 className="font-bold">Solución del problema</h1>
        <ul>
          <li>1. Ingrese a la página web de miCONCAR®</li>
          <li>2. Ingresar su Email y Password.</li>
          <li>3. En la página de Inicio elegir la sección descargas:</li>
          <Image
            alt="imagen1"
            src="https://miconcar.com/uploads/documentos/concar_sql_proceso_descarga_1.0_01__.png"
            width={996}
            height={500}
          />
          <li>
            4. Luego aparecerá la siguiente página, deberá elegir la opción
            Descargar ubicada a la derecha:
          </li>
          <Image
            alt="imagen2"
            src="https://miconcar.com/uploads/documentos/concar_sql_proceso_descarga_1.0_02__1.png"
            width={900}
            height={500}
          />
          <p>
            En la carpeta Descargas de su PC se habrá grabado el siguiente
            archivo comprimido:
          </p>
          <Image
            alt="imagen3"
            src="https://miconcar.com/uploads/documentos/concar_sql_proceso_descarga_1.0_03__.png"
            width={300}
            height={300}
          />
          <p>
            <span className="font-bold">Nota:</span> La última parte del nombre
            puede variar según la versión que se trate (en la imagen anterior la
            versión es 13.21).
          </p>
          <li>
            5. Luego descomprima el archivo, haciéndole clic derecho y eligiendo
            la opción Extraer aquí o Extract here (en inglés) en donde se
            mostrará la carpeta llamada{" "}
            <Image
              alt="imagen4"
              src="https://miconcar.com/uploads/documentos/concar_sql_proceso_descarga_1.0_05__.png"
              width={200}
              height={200}
            />
            dentro encontrará el actualizador
            <Image
              alt="imagen5"
              src="https://miconcar.com/uploads/documentos/concar_sql_proceso_descarga_1.0_06__.png"
              width={200}
              height={200}
            />
            donde XX es la versión vigente en el momento de la descarga.
          </li>
          <li>
            6. Seleccionar el actualizador
            <Image
              alt="imagen6"
              src="https://miconcar.com/uploads/documentos/concar_sql_proceso_descarga_1.0_06__.png"
              width={200}
              height={200}
            />
            hacer clic derecho y elegir la opción
            <Image
              alt="imagen7"
              src="https://miconcar.com/uploads/documentos/concar_sql_proceso_descarga_1.0_04__.png"
              width={200}
              height={200}
            />
            para realizar la actualización.
          </li>
        </ul>
      </div>
    </>
  );
};

export default DescargarVersion;
