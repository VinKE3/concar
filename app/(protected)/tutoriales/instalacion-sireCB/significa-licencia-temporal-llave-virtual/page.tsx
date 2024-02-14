import SignificaLicenciaTemporalLlaveVirtual from "@/app/(protected)/_components/concarSireCb/significa-licencia-temporal-llave-virtual/SignificaLicenciaTemporalLlaveVirtual";
import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "llave_virtual_licencia_temporal",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/10/1161_Cod.1161_D01148_llave_virtual_licencia_temporal1.pdf",
    },
  ];
  return <SignificaLicenciaTemporalLlaveVirtual />;
};

export default page;
