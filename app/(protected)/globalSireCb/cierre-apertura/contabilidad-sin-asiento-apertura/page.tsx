import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Contabilidad Sin Asiento de Apertura",
      href: "https://miconcar.com/uploads/documentos/747_CONCAR_CB_Contabilidad_sin_asiento_de_apertura.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso:</h1>
      <p>
        ¿Se pueden registrar operaciones contables, sin antes haber ingresado
        los saldos iniciales (asiento de apertura)?
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
