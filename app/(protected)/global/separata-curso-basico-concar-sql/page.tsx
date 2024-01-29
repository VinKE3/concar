import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "SEPARATA CONCAR SQL",
      href: "https://www.miconcar.com/uploads/documentos/CONCAR_SQL_2020_BASICO_V3.0.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Separatas usadas en el cursos básico de CONCAR SQL</p>

      <Table items={data} />
    </div>
  );
};

export default page;
