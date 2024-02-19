import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "como superar el mensaje archivo corrupto",
      href: "https://miconcar.com/uploads/documentos/1130_Cod.1130_D01117_como_superar_el_mensaje_archivo_corrupto1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Se puede presentan mensajes de {"Archivos Corruptos"}de diferentes
        nombres
      </p>
      <Image
        alt="archivo corrupto"
        src="/sinDefinir/archivoCorrupto.png"
        width={300}
        height={300}
      />
      <p>Adjuntamos el Manual de como solucionar</p>
      <p>La solución va a depender del nombre del archivo, por ejemplo:</p>
      <ul className="list-disc px-5">
        <li>
          Si el archivo inicia con las letras CCC ó CCD los asientos se han
          dañado por lo tanto deberá enviar su backup a Real Systems para ser
          revisado coordinando previamente con el área de Consultoría o
          restaurar el backup más reciente, perdiéndose los registros realizados
          posteriormente a la obtención dicho backup.
        </li>
        <li>
          Si el archivo inicia con las letras CTCAMB, CPE ó CAN deberá ubicar
          ese archivo en el último backup para copiarlo en la ruta de la base de
          datos reemplazando el corrupto. Es necesario aclarar que en este caso
          el tipo de cambio (archivo CTCAMB), el plan de cuentas (archivo CPE)
          y/o los anexos (archivo CAN) regresarán a los registros que estaban
          vigentes en el backup mencionado perdiéndose los registrados
          posteriormente a la obtención dicho backup, con ello no se perdería
          información de asientos contables, solo tendrían que volver a digitar
          las cuentas y/o anexos perdidos.
        </li>
        <li>
          Si el archivo inicia con otras letras tales como CBA, CCT, CCA ó CCM
          distintas a los dos casos anteriores, debe entrar al sistema a la
          opción Utilitarios/Inicialización Balance y hacer clic en Inicializar,
          luego de reindexar, las cuatro opciones, debe consolidar desde el
          primer mes del año en el que registró asientos contables.
        </li>
        <li>
          También existen otros archivos que se pueden corromper como por
          ejemplo el CAC, CAR, etc. Si el archivo corrupto es diferente a
          cualquiera de los mencionados en los tres puntos anteriores por favor
          comuníquese con el área de Consultoría, llamando a nuestra central
          203-8300, no ejecute el CTFIX.
        </li>
      </ul>
      <h1 className="font-bold">Nota: </h1>
      <p>
        En todos los casos que se realice un movimiento de archivos por fuera
        del sistema DEBE ejecutarse las 4 opciones de reindexado del menú
        Utilitarios
      </p>
      <p>TEMA: ¿Cómo superar el mensaje Archivo Corrupto?</p>
      <div className="px-6 md:w-[45rem] h-96 lg:h-100%  mr-auto mb-10">
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/nXZRodzc-uQ?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <Table items={data} />
    </div>
  );
};

export default page;
