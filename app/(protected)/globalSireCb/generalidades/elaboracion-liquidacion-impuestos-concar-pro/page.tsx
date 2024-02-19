import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Elaboración de una Liquidación de Impuestos en el e-CONCAR PRO",
      href: "https://miconcar.com/uploads/documentos/1054_C1054_D01041_elaboraci%C3%B3n_de_una_liquidaci%C3%B3n_de_impuestos_en_el_econcar_pro_v2020.04.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Le permitira ejecutar y verificar la correcta asignacion y verificacion
        de los procesos al momento de crear una nueva Pre Liquidacion de
        Impuestos de su mes.
      </p>
      <p>
        Para conocer el funcionamiento te invito que revises el documento
        adjunto líneas abajo
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
