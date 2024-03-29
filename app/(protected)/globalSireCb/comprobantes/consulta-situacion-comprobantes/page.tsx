import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Consulta situación comprobantes",
      href: "https://miconcar.com/uploads/documentos/61_CONCAR_CB_Consulta_situacion_de_comprobantes.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Esta opción sirve para consultar los comprobantes ingresados y verificar
        que todos se encuentren finalizados.
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
