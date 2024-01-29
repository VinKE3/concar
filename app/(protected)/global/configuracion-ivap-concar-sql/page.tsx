import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Configuración IVAP en el concar sql",
      href: "https://miconcar.com/uploads/documentos/1140_Sistema_CONCAR_SQL_Configuracion_IVAP.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Pueden observar segun manual adjunto</p>

      <Table items={data} />
    </div>
  );
};

export default page;
