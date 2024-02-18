import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Como se provisiona una compra con facturación electrónica en el e concar pro",
      href: "https://miconcar.com/uploads/documentos/1125_Cod.1125_D_01112_c%C3%B3mo_contabilizar_la__facturaci%C3%B3n_electr%C3%B3nica_en_el_econcar_pro.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Segun Manual adjunto pasamos a indicar como trabajar la facturacion
        electronica de compras en el modulo e Concar Pro.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
