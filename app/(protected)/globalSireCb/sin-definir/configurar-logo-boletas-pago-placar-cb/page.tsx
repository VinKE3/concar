import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "como_configurar_el_logo_en_mis_boletas_de_pago_de_placarcb",
      href: "https://miconcar.com/uploads/documentos/1188_Cod.1188_D01175_como_configurar_el_logo_en_mis_boletas_de_pago_de_placarcb.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso:</h1>
      <p>
        Se adjunta manual, con los pasos detallados tanto para el logo de la
        compañia y logo de la firma, los cuales deben ir en la boleta de pago.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
