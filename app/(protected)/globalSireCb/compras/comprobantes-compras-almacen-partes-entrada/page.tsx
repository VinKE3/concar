import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Comprobantes Compras – Almacén (Partes de Entrada)",
      href: "https://miconcar.com/uploads/documentos/60_CONCAR_CB_Comprobante_compras_almacen_partes_de_entrada.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Para poder utilizar esta opción deberá tener el módulo de Almacenes de
        Real Systems integrado al Concar®.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
