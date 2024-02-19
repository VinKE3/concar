import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Haberes y descuentos fijos",
      href: "https://miconcar.com/uploads/documentos/598_PLACAR_CB_Haberes_y_descuentos_fijos.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Son los conceptos de remuneración o descuento que se repiten todos los
        meses con el mismo importe o variando de acuerdo a los días trabajados.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
