import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "como_resturar_una_copia_de_seguridad_concarsql",
      href: "https://miconcar.com/uploads/documentos/1185_Cod.1185_D01172_como_resturar_una_copia_de_seguridad_concarsql.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Lo recomendable es que su personal de sistemas, realice el mismo.</p>

      <Table items={data} />
    </div>
  );
};

export default page;
