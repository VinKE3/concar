import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const GenerarArchivoCompras = () => {
  const data = [
    {
      id: 1,
      title: "Error 3265 al generar archivo mensual de compras",
      href: "https://miconcar.com/uploads/documentos/201_CONCAR_SQL_Error_3265_al_generar_archivo_mensual_de_compras.pdf",
    },
  ];
  return (
    <div className="space-y-2">
      <h1 className="font-bold">escripción del problema</h1>
      <p>Error ‘3265’ en tiempo de ejecución:</p>
      <p>
        No se encontró el elemento en la colección que corresponde al nombre o
        el ordinal solicitado al generar registro de compras
      </p>
      <Image
        src="/generarArchivoCompras.jpg"
        alt="1"
        width={700}
        height={500}
      />
      <Table items={data} />
    </div>
  );
};

export default GenerarArchivoCompras;
