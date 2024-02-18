import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Registro de Compras con Percepción en Compras Contado",
      href: "https://miconcar.com/uploads/documentos/694_CONCAR_CB_Registro_de_compras_con_percepcion_en_compras_contado.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p className="font-bold">Caso</p>
      <p>
        Cómo registrar las percepciones de IGV incluidas en las facturas, en
        compras-contado para que se muestren en el Formato 8.1 Registro de
        Compras.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
