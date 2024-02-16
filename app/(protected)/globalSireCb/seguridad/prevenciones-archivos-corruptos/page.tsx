import TablaDocumentosRelacionados from "@/components/TablaDocumentosRelacionados";
import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "¿Mensaje Error de Apertura de Archivo (CPE,CTG,CTCAMB)?",
      description:
        "Se detalla solución para superar mensajes de archivos corruptos, no encontrados, por lo general estos archivos se han dañado.",
      href: "/globalSireCb/seguridad/error-cpe-ctg-ctcamb",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso</h1>
      <p>
        Qué prevenciones tomar en cuenta para evitar archivos corruptos (data
        dañada).
      </p>
      <h1 className="font-bold">Solución</h1>
      <p>
        La mayoría de los casos que se han registrado son por apagones o porque
        cuando se estaba procesando determinado periodo la PC que realizaba el
        proceso o el servidor fueron apagados o desconectados de la red. También
        se han reportado casos de pérdida de información como consecuencia de un
        virus informático. Por ello es importante que tomen en cuenta los
        siguientes tips para prevenir pérdida de información
      </p>
      <p className="font-bold">I. Reindexe</p>
      <ul className="list-decimal px-5">
        <li>Reindexe las cuatro opciones al iniciar la jornada laboral.</li>
        <li>Reindexe las cuatro opciones al término de la jornada laboral.</li>
        <li>Reindexe las cuatro opciones antes de hacer un backup.</li>
        <li>
          Reindexe las cuatro opciones después de una interrupción intempestiva
          del sistema, ya sea por cortes en la electricidad o en la red.
        </li>
        <li>
          Si la reindexación no termina correctamente, intentar nuevamente, si
          el mensaje persiste comunicarse con el área de Consultoría a través de
          nuestra central (Tlf. 203 8300).
        </li>
      </ul>
      <p className="font-bold">II. Asegure su información</p>
      <ul className="list-decimal px-5">
        <li>
          Genere copias de seguridad periódicas, de preferencia diariamente,
          como mínimo semanalmente.
        </li>
        <li>
          Guarde la copia de seguridad (backup) en otro equipo o en un disco
          duro externo.
        </li>
        <li>
          Guarde la copia de seguridad (backup) por lo menos una vez por semana,
          fuera de su oficina.
        </li>
        <li>Mantenga un histórico de cuatro backups.</li>
      </ul>
      <p className="font-bold">
        III. Asegure la estabilidad del fluido eléctrico.
      </p>
      <p className="font-bold">IV. Asegure la estabilidad de su red.</p>
      <p className="font-bold">V. Mantenga su antivirus actualizado.</p>
    </div>
  );
};

export default page;
