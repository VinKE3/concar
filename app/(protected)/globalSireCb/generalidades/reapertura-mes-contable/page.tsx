import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Reapertura Mes Contable",
      href: "https://miconcar.com/uploads/documentos/68_CONCAR_CB_Reapertura_mes_contable.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Esta opción se utiliza para reabrir un mes que se encuentra cerrado por
        haber realizado una Consolidación Definitiva; de este modo podrá
        ingresar o modificar comprobantes.{" "}
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
