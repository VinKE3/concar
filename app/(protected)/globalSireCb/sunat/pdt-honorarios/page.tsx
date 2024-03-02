import Table from "@/components/Table";
import React from "react";

const PdtHonorarios = () => {
  const data = [
    {
      id: 1,
      title: "PDT Honorarios",
      href: "https://miconcar.com/uploads/documentos/388_CONCAR_SQL_Pdt_honorarios.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">11.1 PDT Honorarios</h1>
      <p>
        Para presentar información a la SUNAT de los Honorarios se debe
        registrar primero todos los recibos de Honorarios “Comprobante de
        Registro de Honorarios”.
      </p>
      <Table items={data} />
    </div>
  );
};

export default PdtHonorarios;
