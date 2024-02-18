import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Registro de Compras con Percepción en Comprobante Compras",
      href: "https://miconcar.com/uploads/documentos/770_CONCAR_SQL_Registro_de_compras_con_percepcion_en_comprobante_compras.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso:</h1>
      <p>
        Cómo registrar las percepciones de IGV incluidas en las facturas de
        compras, a través de la opción Comprobante Compras, para que se muestren
        en el Formato 8.1 Registro de Compras.
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
