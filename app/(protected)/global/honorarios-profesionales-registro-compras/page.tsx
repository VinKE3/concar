import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Honorarios Profesionales en el Registro de Compras",
      href: "https://miconcar.com/uploads/documentos/767_CONCAR_SQL_Honorarios_profesionales_en_el_registro_de_compras.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso</h1>
      <p>
        Cómo mostrar los recibos por honorarios profesionales, con y sin
        retención, en el formato 8.1 Registro de Compras.
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
