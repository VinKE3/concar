import TablaDocumentosRelacionados from "@/components/TablaDocumentosRelacionados";
import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Calculo de Ratio",
      href: "https://miconcar.com/uploads/documentos/772_CONCAR_CB_Calculo_de_ratio.pdf",
    },
  ];
  const data2 = [
    {
      id: 1,
      title: "Ratios",
      description:
        "Esta opción sirve para emitir ratios definidos por el usuario. Las fórmulas de los ratios se ingresan en el Mantenimiento de Ratios.",
      href: "/globalSireCb/otros-reportes/ratios",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso:</h1>
      <p>Demostración de calculo del ratio {"Rentabilidad Bruta"}.</p>

      <Table items={data} />
      <TablaDocumentosRelacionados items={data2} />
    </div>
  );
};

export default page;
