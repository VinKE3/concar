import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Generación Archivo Saldo documento",
      href: "https://miconcar.com/uploads/documentos/89_CONCAR_CB_Generacion_archivo_saldo_documento.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Generación Archivo Saldo documento</h1>
      <p>
        El proceso actualiza los archivos de análisis hasta la fecha límite que
        se indique para emitir algunos reportes de Documentos Pendientes y
        Estados de Cuenta.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
