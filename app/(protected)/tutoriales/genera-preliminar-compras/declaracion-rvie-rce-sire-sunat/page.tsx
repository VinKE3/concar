import DeclaracionRviRceSireSunat from "@/app/(protected)/_components/concarSireCb/declaracion-rvie-rce-sire-sunat/DeclaracionRviRceSireSunat";
import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Declaración RVIE + RCE en SIRE SUNAT_cb_sq",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/11/1213_Cod.1213_D01200_Declaracion_RVIE_RCE_en_SIRE_SUNAT_cb_sql.pdf",
    },
  ];
  return <DeclaracionRviRceSireSunat />;
};

export default page;
