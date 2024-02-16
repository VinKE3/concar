import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Archivo de Anexos",
      href: "https://miconcar.com/uploads/documentos/849_CANXX.DBF",
    },
    {
      id: 2,
      title: "Estructura de archivo para carga de anexos.",
      href: "https://miconcar.com/uploads/documentos/849_INTERFAZ_ANEXOS_CONCAR_CB.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        El documento detalla la estructura que debe tener el archivo de anexos
        para que se pueda cargar en el sistema. Así mismo, se puede descargar un
        modelo del archivo de anexos.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
