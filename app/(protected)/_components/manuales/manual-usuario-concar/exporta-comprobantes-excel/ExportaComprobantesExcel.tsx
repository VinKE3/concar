import Table from "@/components/Table";
import React from "react";

const ExportaComprobantesExcel = () => {
  const data = [
    {
      id: 1,
      title: "Exporta Comprobantes a Excel",
      href: "https://miconcar.com/uploads/documentos/322_5.15_CONCAR_SQL_Exporta_Comprobantes_a_Excel_322-D00319.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Utilizando esta opción se puede exportar por subdiarios, los
        comprobantes registrados en CONCAR® SQL al Excel; asimismo, se puede
        incluir cuentas automáticas.
      </p>
      <Table items={data} />
    </div>
  );
};

export default ExportaComprobantesExcel;
