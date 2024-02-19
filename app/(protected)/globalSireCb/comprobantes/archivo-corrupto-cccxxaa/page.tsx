import TablaDocumentosRelacionados from "@/components/TablaDocumentosRelacionados";
import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "¿Cómo restaurar una copia de Seguridad o Backup en el Concar CB? - Incluye Video",
      description:
        "Procedimiento para restaurar la Copia de Seguridad generada en el CONCAR®",
      href: "/globalSireCb/seguridad/restaurar-copia-seguridad-concar-cb",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso.</h1>
      <p>
        Al ejecutar la opción de reindexado, el sistema arroja el mensaje
        {"Archivo Corrupto"}
      </p>
      <Image
        alt="Transferencia Comprobantes"
        src="https://miconcar.com/uploads/documentos/CCC._1.jpg"
        width={300}
        height={300}
      />
      <h1 className="font-bold">Solución.</h1>
      <p>
        Como primera opción, se recomienda enviar el backup a Real Systems para
        revisar su información y verificar si es posible que su data se
        recupere. Para ello debe contactarse con un consultor al 01-203-8300.
        Dicho servicio tiene un costo adicional.
      </p>
      <p>
        La otra opción, en caso tenga un backup reciente, restaure esa copia
        (Ver documento relacionado sobre restauración de backup). En este caso
        se perderán los comprobantes registrados desde la fecha del backup hasta
        la fecha que se restaure.
      </p>
      <TablaDocumentosRelacionados items={data} />
    </div>
  );
};

export default page;
