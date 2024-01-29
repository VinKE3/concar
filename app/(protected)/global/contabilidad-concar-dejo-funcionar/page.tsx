import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso</h1>
      <Image
        src="https://miconcar.com/uploads/documentos/DEJO_DE_FUNCIONAR_CB.jpg"
        alt="llave no reconocida"
        width={300}
        height={300}
      />
      <h1 className="font-bold">Solución 1</h1>
      <p>
        1. En el ícono del CONCAR que se encuentra en el escritorio, clic
        derecho {"Propiedades"}, seleccione la pestaña {"Compatibilidad"} y
        configure como se muestra a continuación:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/PROPIEDADES.jpg"
        alt="llave no reconocida"
        width={500}
        height={500}
      />
      <h1 className="font-bold">Solución 2</h1>
      <p>
        1. Volver a ejecutar el actualizador y modificar la ruta o el nombre de
        la carpeta de actualización. Por ejemplo, si el CONCAR está instalado en
        C:\Concar80 (ruta por defecto), al momento de actualizar el usuario
        deberá cambiar la ruta a D:\Concar80. Si en caso no tuviera otra unidad
        de Disco, podría cambiar el nombre de la carpeta a Concar90 o similar.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/CARPETA_ACTUALIZACION.jpg"
        alt="llave no reconocida"
        width={500}
        height={500}
      />
      <p>
        2. Si es un CONCAR en redes: ir a la carpeta de instalación inicial (por
        defecto C:\Concar80), ubicar el archivo
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/rgconcar.jpg"
        alt="llave no reconocida"
        width={200}
        height={200}
      />
      <p>
        y copiarlo en la nueva ruta donde actualizó. Entre al sistema a través
        del nuevo ícono generado automáticamente por el actualizador.
      </p>
    </div>
  );
};

export default page;
