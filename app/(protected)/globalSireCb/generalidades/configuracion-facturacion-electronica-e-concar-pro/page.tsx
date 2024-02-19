import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Configuración para la Facturación Electrónica en el e-CONCAR PRO",
      href: "https://miconcar.com/uploads/documentos/1046_C1046_D01033_configuracion_para_la_facturacion_electronica_en__el_econcar_pro_v2020.041.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">
        Para comenzar a utilizar el módulo e-CONCAR PRO será necesario alimentar
        el Sistema CONCAR CB.
      </h1>
      <p>
        Para conocer el funcionamiento te invito que revises el documento
        adjunto líneas abajo
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
