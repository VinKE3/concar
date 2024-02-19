import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Certificado Retención SPP",
      href: "https://miconcar.com/uploads/documentos/654_PLACAR_CB_Certificado_retencion_spp.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Emite el certificado anual de las retenciones efectuadas al trabajador
        durante un año por el Sistema Privado de Pensiones o AFP.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
