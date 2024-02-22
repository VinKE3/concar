import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Impresión del Registro de Compras en Una Hoja",
      href: "https://miconcar.com/uploads/documentos/704_CONCAR_CB_Impresion_del_registro_de_compras_en_una_hoja.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso:</h1>
      <p>Cómo imprimir el registro de compras en una sola hoja.</p>

      <Table items={data} />
    </div>
  );
};

export default page;
