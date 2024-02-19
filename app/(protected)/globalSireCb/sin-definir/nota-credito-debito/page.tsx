import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "NOTA DE CREDITO O DEBITO NO PIDE DOCUMENTO DE REFERENCIA",
      href: "https://miconcar.com/uploads/documentos/1000_CONCAR_CB_Nota_de_credito_o_debito_no_pide_documento_de_referencia.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Cuando se quiere registrar una nota de crédito o débito no se activa la
        opcion para ingresar la factura que lo origina.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
