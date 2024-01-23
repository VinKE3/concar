import Table from "@/components/Table";
import React from "react";

const ConsultaSituacionComprobantes = () => {
  const data = [
    {
      id: 1,
      title: "Consulta situación comprobantes",
      href: "https://miconcar.com/uploads/documentos/317_5.10_CONCAR_SQL_Consulta_situación_comprobantes_317-D00314.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Esta opción sirve para consultar los comprobantes ingresados y verificar
        que todos se encuentren finalizados.
      </p>
      <Table items={data} />
    </div>
  );
};

export default ConsultaSituacionComprobantes;
