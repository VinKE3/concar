import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Registro de Compras con Detracción",
      href: "https://miconcar.com/uploads/documentos/692_CONCAR_CB_Registro_de_compras_con_detraccion.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso:</h1>
      <p>
        Como ingresar una compra con detracción para efectos de considerarse en
        la presentación del Registro de Compras Formato 8.1 o en el libro
        electrónico de compras.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
