import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Como proceder a desactivar - anular su real key virtual",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/11/1159_Cod.1159_D01146_como_proceder_a_desactivar_anular_su_real_key_virtual.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        En el Manual adjunto se detalla, las caracteristicas que debe tener la
        Carta para informar y solicitar la desactivacion o anulacion de su llave
        virtual.
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
