import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Comprobantes Compras Contado",
      href: "https://miconcar.com/uploads/documentos/54_CONCAR_CB_Comprobante_compras_contado.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Se utiliza para registrar los documentos que sirven para sustentar la
        rendición de caja chica sin registrar por cada uno de ellos una cuenta
        42XXXX o 43XXXX. En esta opción se realiza tanto la provisión como la
        cancelación en un mismo asiento, quedando a elección del usuario los
        documentos que se registrarán en el Registro de Compras.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
