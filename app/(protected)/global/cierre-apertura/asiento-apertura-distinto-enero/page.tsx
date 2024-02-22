import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Asiento de Apertura en un Mes Distinto a Enero",
      href: "https://miconcar.com/uploads/documentos/745_CONCAR_SQL_Asiento_de_apertura_en_un_mes_distinto_a_enero.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso</h1>
      <p>Cómo ingresar un asiento de apertura en un mes distinto a enero.</p>
      <Table items={data} />
    </div>
  );
};

export default page;
