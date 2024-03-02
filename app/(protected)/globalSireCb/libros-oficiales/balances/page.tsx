import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Balances",
      href: "https://miconcar.com/uploads/documentos/71_CONCAR_CB_Balances1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Incluye reportes generales y analíticos de Balance General y Balance de
        Comprobación.
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
