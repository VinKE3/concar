import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Como_actualizar_los_pesos_de_forma_masiva_en_el_softcomNET",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/02/1202_Cod.1202_D01189_como_actualizar_los_pesos_de_forma_masiva_en_el_softcom.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Se adjunta manual detallado:</p>
      <Table items={data} />
    </div>
  );
};

export default page;
