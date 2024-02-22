import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Cheque Anulado",
      href: "https://miconcar.com/uploads/documentos/832_CONCAR_SQL_Cheque_anulado1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1>Cómo registrar un cheque anulado.</h1>
      <Table items={data} />
    </div>
  );
};

export default page;
