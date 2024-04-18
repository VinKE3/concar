import Table from "@/components/Table";
import React from "react";

const CodigosAnexos = () => {
  const data = [
    {
      id: 1,
      title: "Códigos de Anexos",
      href: "https://miconcar.com/uploads/documentos/293_4.02._CONCAR_SQL_Codigos_de_Anexos_293.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        En esta base de datos se registran los anexos, que son datos
        complementarios a las cuentas, los mismos que sirven para identificar
        diferentes tipos de entidades o datos que son necesarios para hacer un
        análisis más detallado de las cuentas.
      </p>
      <Table items={data} />
    </div>
  );
};

export default CodigosAnexos;
