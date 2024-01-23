import Table from "@/components/Table";
import React from "react";

const NoRealizaImpresion = () => {
  const data = [
    {
      id: 1,
      title: "No realiza impresión en red",
      href: "https://miconcar.com/uploads/documentos/169_CONCAR_CB_No_realiza_impresion_en_red.pdf",
    },
  ];
  return (
    <div className="space-y-2">
      <h1 className="font-bold">Descripción del problema</h1>
      <p>No se logra imprimir en una impresora conectada a la red.</p>
      <Table items={data} />
    </div>
  );
};

export default NoRealizaImpresion;
