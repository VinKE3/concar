import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Honorarios Profesionales en el Registro de Compras",
      href: "https://miconcar.com/uploads/documentos/712_Concar_CB_Honorarios_profesionales_en_el_registro_de_compras.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p className="font-bold">Caso</p>
      <p>
        Cómo mostrar los recibos por honorarios profesionales, con y sin
        retención, en el formato 8.1 Registro de Compras.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
