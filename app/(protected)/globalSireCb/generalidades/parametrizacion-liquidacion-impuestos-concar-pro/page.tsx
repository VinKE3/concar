import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Parametrización para la Liquidación de Impuestos en el e-CONCAR PRO",
      href: "https://miconcar.com/uploads/documentos/1053_C1053_D01040_parametrizaci%C3%B3n_para_la_liquidaci%C3%B3n_de_impuestos_en_el_econcar_pro_v2020.04.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Al estar comunicados e interrelacionados el módulo e-CONCAR PRO con el
        sistema CONCAR CB, hemos desarrollado esta nueva funcionalidad que
        permite realizar una Pre-Liquidación de Impuestos; ya que esta opción se
        alimenta de la información que se registra en el sistema CONCAR CB, como
        son los registros de Compras, Ventas, Percepción y Retención.
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
