import TablaDocumentosRelacionados from "@/components/TablaDocumentosRelacionados";
import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Archivo corrupto CCDXXAA (donde XX=Número de Compañía y AA= Año)",
      href: "https://miconcar.com/uploads/documentos/173_CONCAR_CB_Archivo_corrupto_ccdxxaa.pdf",
    },
  ];
  const data2 = [
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
        Al ejecutar la opción de reindexado, el sistema arroja el siguiente
        mensaje:Archivo Corrupto
      </p>

      <Table items={data} />
      <TablaDocumentosRelacionados items={data2} />
    </div>
  );
};

export default page;
