import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "como_realizar_el_registro_de_comprobantes_de_compras_con_tasa_de_igv10_en_el_sispag",
      href: "https://miconcar.com/uploads/documentos/1182_Cod.1182_D01169_registro_de_comprobantes_compras_con_tasa_de_igvdel10_sispag_.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Se adjunta manual detallado por favor</p>
      <Table items={data} />
    </div>
  );
};

export default page;
