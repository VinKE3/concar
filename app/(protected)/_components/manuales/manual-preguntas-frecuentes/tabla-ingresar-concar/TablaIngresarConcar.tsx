import Image from "next/image";
import React from "react";

const TablaIngresarConcar = () => {
  return (
    <>
      <div>
        <h1>Descripción del problema</h1>
        <h2>Error Apertura de tabla impide ingresar al CONCAR.</h2>
        <Image
          src="https://miconcar.com/uploads/documentos/CONXION2.jpg"
          width={500}
          height={300}
          alt="Error Apertura de tabla impide ingresar al CONCAR."
        />
        <p>
          El mensaje puede variar en algunas palabras como nombres de objetos o
          sentencias.
        </p>
      </div>
      <div>
        <h1>Solución al problema</h1>
        <h2>
          La conexión a la base de datos debe ser con Autenticación SQL,{" "}
          <span className="font-bold underline">
            no utilizar autenticación Windows.
          </span>{" "}
          Realizar los siguientes pasos:
        </h2>
        <ul>
          <li>
            1. Entrar a la carpeta C:\RSCONCAR\ y eliminar el archivo rsovl.com.
          </li>
          <Image
            src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_error_apertura_tabla_.jpg"
            width={700}
            height={500}
            alt="Eliminar el archivo rsovl.com."
          />
          <li>
            2. Doble clic sobre el ícono del CONCAR y saldrá la ventana para
            volver a conectarse a la base de datos del CONCAR.
          </li>
          <li>
            3. Colocar los datos para volver a conectar con el Servidor SQL:
          </li>
          <Image
            src="https://miconcar.com/uploads/documentos/CONXION.jpg"
            width={700}
            height={500}
            alt="Colocar los datos para volver a conectar con el Servidor SQL."
          />
          <li>
            4. Elegir la Base de Datos en Base de Datos según la imagen del
            punto 3.
          </li>
          <li>5. Clic en Aceptar</li>
        </ul>
      </div>
    </>
  );
};

export default TablaIngresarConcar;
