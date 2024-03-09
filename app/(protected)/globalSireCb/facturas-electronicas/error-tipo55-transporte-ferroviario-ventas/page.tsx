import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Error número de serie para el documento de tipo 55 BVME para transporte ferroviario de pasajeros.",
      href: "https://miconcar.com/uploads/documentos/873_concar_cb_sql_c1_1_error_serie_bvme_transporte_ferroviario_v1_.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso:</h1>

      <Table items={data} />
    </div>
  );
};

export default page;
