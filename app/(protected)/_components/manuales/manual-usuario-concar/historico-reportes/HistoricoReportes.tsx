import Table from "@/components/Table";
import React from "react";

const HistoricoReportes = () => {
  const data = [
    {
      id: 1,
      title: "Histórico reportes discos",
      href: "https://miconcar.com/uploads/documentos/401_CONCAR_SQL_Historico_reportes_discos.pdf",
    },
  ];
  return (
    <div>
      <p>
        Esta opción permite consultar e imprimir cualquier reporte que se haya
        guardado en disco.
      </p>
      <Table items={data} />
    </div>
  );
};

export default HistoricoReportes;
