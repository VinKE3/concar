import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Características del sistema",
      href: "https://miconcar.com/uploads/documentos/17_CONCAR_CB_Caracteristicas_del_sistema.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Adaptado a las últimas normativas de la SUNAT</p>

      <Table items={data} />
    </div>
  );
};

export default page;
