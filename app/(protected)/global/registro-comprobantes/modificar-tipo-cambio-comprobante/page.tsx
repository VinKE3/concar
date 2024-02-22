import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Modificar el Tipo de Cambio de un Comprobante",
      href: "https://miconcar.com/uploads/documentos/810_CONCAR_CB_Modificar_el_tipo_de_cambio_de_un_comprobante1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Este documento les mostrará la forma de realizar el cambio y/o
        actualización del tipo de cambio en un comprobante contable registrado
        anteriormente por cualquier opción del sistema.
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
