import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Consulta del Calculo en la Liquidación de Impuestos en el e-CONCAR PRO",
      href: "https://miconcar.com/uploads/documentos/1056_C1056_D01043_consulta_del_calculo_en_la_liquidaci%C3%B3n_de_impuestos_en_el_econcar_pro_v2020.041.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Al momento de ejecutar los respectivos calculos en la Liquidacion de
        Impuestos y Formulario, el sistema permite visualizar el detalle de
        donde genera estos valores.
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
