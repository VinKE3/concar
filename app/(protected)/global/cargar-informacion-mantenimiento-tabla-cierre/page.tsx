import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "como se carga las tablas de cierre en el concarsql",
      href: "https://miconcar.com/uploads/documentos/1153_Cod.01153_D01140_como__se_carga_las_tablas_de_cierre_en__el_concarsql.pdf",
    },
    {
      id: 2,
      title: "Tablas de Cierre - Concar SQL",
      href: "https://miconcar.com/uploads/documentos/1153_Tabla_de_Cierre_SQL.xlsx",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Segun Manual adjunto detallamos como realizar la carga de las Tablas de
        Cierre para el Concar SQL.
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
