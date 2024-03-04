import TablaDocumentosRelacionados from "@/components/TablaDocumentosRelacionados";
import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Pago de la Detracción",
      href: "https://miconcar.com/uploads/documentos/724_CONCAR_CB_Pago_de_la_detraccion.pdf",
    },
  ];
  const data2 = [
    {
      id: 1,
      title: "Registro de Compras con Detracción",
      description: "Cómo ingresar una compra con detracción.",
      href: "/globalSireCb/compras/registro-compras-detraccion",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso:</h1>
      <p>Cómo pagar la detracción.</p>

      <Table items={data} />
      <TablaDocumentosRelacionados items={data2} />
    </div>
  );
};

export default page;
