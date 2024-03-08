import List from "@/components/List";
import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "¿Se pueden crear ejercicios anteriores en la misma compañía?",
      href: "https://miconcar.com/uploads/documentos/784_CONCAR_CB_Se_pueden_crear_ejercicios_anteriores_en_la_misma_compa%C3%B1ia.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Este tutorial contiene:</p>

      <List items={data} />
    </div>
  );
};

export default page;
