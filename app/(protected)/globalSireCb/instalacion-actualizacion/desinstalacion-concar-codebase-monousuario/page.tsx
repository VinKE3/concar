import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Desinstalar CONCAR® CodeBase Monousuario",
      href: "https://miconcar.com/uploads/documentos/1024_D01011_Desinstalaci%C3%B3n_Monousuario_concar_cb_preguntas_frecuentes.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p className="font-bold">Alcance:</p>
      <p>Desinstalar CONCAR® CodeBase Monousuario.</p>
      <Table items={data} />
    </div>
  );
};

export default page;
