import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "obranzas Registro de Planilla de Cobranza",
      href: "https://miconcar.com/uploads/documentos/723_CONCAR_SQL_Cobranzas_registro_de_planilla_de_cobranza.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso</h1>
      <p>Cómo contabilizar una planilla de cobranza.</p>
      <Table items={data} />
    </div>
  );
};

export default page;
