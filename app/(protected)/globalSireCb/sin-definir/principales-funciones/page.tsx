import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Principales funciones",
      href: "https://miconcar.com/uploads/documentos/427_PLACAR_CB_Principales_funciones.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        El sistema realiza un conjunto de funciones que permiten mantener
        actualizadas las bases de datos, efectuar los cálculos automáticos y
        emitir información.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
