import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Como superar el mensaje de archivo corrupto ctrutr al momento de ejecutar una copia de seguridad",
      href: "https://miconcar.com/uploads/documentos/1134_Cod.1134_D01121_como_superar_el_mensaje_de_archivo_corrupto_ctrutr_al_momento_de_ejecutar_una_copia_de_seguridad.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Si se presenta el siguiente mensaje:</p>
      <Image
        alt="Como superar el mensaje de archivo corrupto ctrutr al momento de ejecutar una copia de seguridad"
        src="/acceso/corruptoCtrutr.png"
        width={300}
        height={300}
      />
      <h1>La solución va a depender del nombre del archivo, por ejemplo:</h1>
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
      <p className="font-bold">Nota:</p>
      <p>
        En todos los casos que se realice un movimiento de archivos por fuera
        del sistema DEBE ejecutarse las 4 opciones de reindexado del menú
        Utilitarios
      </p>
      <h1>
        ¿Cómo superar el mensaje de Archivo Corrupto – CTRUTR al momento de
        ejecutar una copia de seguridad?
      </h1>
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
              src="https://www.youtube.com/embed/Gze39uEuF60?autoplay=0&amp;mute=0&amp;controls=0&"
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
