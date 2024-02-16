import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "como superar el mensaje error 91 en tiempo de ejecucion",
      href: "https://miconcar.com/uploads/documentos/933_Cod.0933_D00920_como_superar_el_mensaje_error_91_tiempo_de_ejecucion1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso:</h1>
      <p>Se adjunta Manual donde detallamos los pasos a realizar</p>

      <Table items={data} />
    </div>
  );
};

export default page;
