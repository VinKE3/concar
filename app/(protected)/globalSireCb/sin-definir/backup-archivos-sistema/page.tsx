import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Backup de Archivos del Sistema",
      href: "https://miconcar.com/uploads/documentos/660_PLACAR_CB_Backup_de_archivos_del_sistema.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Esta opción permite realizar la copia de seguridad del sistema de
        planilla. Este proceso genera un archivo *.ZIP el cual lleva como nombre
        el código de la Compañía, seguido del Tipo de Planilla, seguido del Mes
        y el año de la Planilla.{" "}
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
