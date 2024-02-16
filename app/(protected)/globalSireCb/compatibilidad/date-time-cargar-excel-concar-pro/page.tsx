import TablaDocumentosRelacionados from "@/components/TablaDocumentosRelacionados";
import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Compatbilidad - Configuracion Regional",
      href: "https://miconcar.com/uploads/documentos/1179_544_Cod.0544_D00535_compatibilidad_configuracion_regional.pdf",
    },
  ];
  const data2 = [
    {
      id: 1,
      title: "Compatibilidad del CONCAR - Incluye Video",
      description:
        "Se detallan los siguientes temas de Compatibilidad para las plataformas CODEBASE y SQL - Requisitos Técnicos Equipos, Versiones de Windows, Office y Servidores - Config...",
      href: "/globalSireCb/compatibilidad/concar-compatibilidad",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Revisar manual adjunto de Configuracion Regional.</p>

      <Table items={data} />
      <TablaDocumentosRelacionados items={data2} />
    </div>
  );
};

export default page;
