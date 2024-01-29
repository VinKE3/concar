import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "como se carga las tablas de flujo de efectivo en el concar sql",
      href: "https://miconcar.com/uploads/documentos/1154_Cod.01154_D01141_como__se_carga_las_tablas_de_flujo_de_efectivo_en__el_concarsql.pdf",
    },
    {
      id: 2,
      title: "Tablas de Flujo - Concar SQL",
      href: "https://miconcar.com/uploads/documentos/1154_Flujo_de_efectivo_SQL.xlsx",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Segun Manual adjunto detallamos los pasos a realizar para la carga de
        las Tablas de Flujo de Efectivo al sistema Concar SQL
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
