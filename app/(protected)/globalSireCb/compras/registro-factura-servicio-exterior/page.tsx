import TablaDocumentosRelacionados from "@/components/TablaDocumentosRelacionados";
import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "IMPORTACION -¿Cómo contabilizar Compras No Domiciliadas de Servicios? - Invoice - Incluye Video",
      description:
        "A continuación detallamos los pasos para registrar Compras No Domiciliadas - Servicios en el sistema correctamente",
      href: "/globalSireCb/compras/contabilizar-compras-no-domiciliadas-servicios",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso</h1>
      <p>Cómo ingresar la factura del agente de Aduana.</p>
      <h1 className="font-bold">Solución</h1>
      <p>
        La secuencia es la misma que la explicada en Importaciones - Registro de
        Factura del Exterior (Invoice).
      </p>
      <TablaDocumentosRelacionados items={data} />
    </div>
  );
};

export default page;
