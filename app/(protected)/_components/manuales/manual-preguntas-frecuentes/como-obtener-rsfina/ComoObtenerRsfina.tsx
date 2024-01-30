import Image from "next/image";
import Link from "next/link";
import React from "react";

const ComoObtenerRsfina = () => {
  return (
    <>
      <div className="py-5">
        <h1 className="font-bold">Descripción del problema</h1>
        <p>
          Se necesita saber la forma de obtener el utilitario RSFINA11 para
          consolidar los meses contables.
        </p>
      </div>
      <div>
        <h1 className="font-bold">Solución al problema</h1>
        <h2>
          Descargar de Internet el archivo RSFINA11.exe de la siguiente
          dirección:
        </h2>
        <Link
          className="text-sky-500 hover:text-sky-600"
          href="FTP://190.41.18.9"
        >
          FTP://190.41.18.9
        </Link>
        <p>
          En la ventana que aparecerá para Iniciar Sesión ingresar todos los
          datos en minúsculas:
        </p>
        <ul>
          <li>Usuario: utilitarios</li>
          <li>Contraseña: concar2011</li>
        </ul>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_como_obtener_el_rstina11_.jpg"
          width={500}
          height={300}
          alt="Iniciar Sesión"
        />
        <p>Entrar a la carpeta RSFINA11/</p>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_como_obtener_el_rstina11_1_.jpg"
          width={900}
          height={500}
          alt="Entrar a la carpeta RSFINA11/"
        />
        <p>En la siguiente ventana aparecerán los siguientes documentos:</p>
        <p>CONCARSQL_Manual_RSFINA11-pdf (manual)</p>
        <p>RSFINA11.exe (ejecutable del programa)</p>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_como_obtener_el_rstina11_2_.jpg"
          width={900}
          height={500}
          alt="En la siguiente ventana aparecerán los siguientes documentos:"
        />
        <p>
          Copiar el archivo RSFINA11.exe a la carpeta C:\RSCONCAR\ para
          ejecutarlo.
        </p>
      </div>
    </>
  );
};

export default ComoObtenerRsfina;
