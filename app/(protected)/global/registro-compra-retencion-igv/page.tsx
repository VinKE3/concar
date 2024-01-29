import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Registro de compra con retención del IGV",
      href: "https://miconcar.com/uploads/documentos/714_CONCAR_CB_Registro_de_compra_con_retencion_del_igv.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso:</h1>
      <p>Cómo registrar una compra con retención del IGV.</p>

      <Table items={data} />
    </div>
  );
};

export default page;
