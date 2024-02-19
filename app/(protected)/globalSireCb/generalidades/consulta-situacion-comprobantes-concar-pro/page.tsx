import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Consulta situación de comprobantes en el e-CONCAR PRO",
      href: "https://miconcar.com/uploads/documentos/1047_C1047_D01034_consulta_situaci%C3%B3n_de_comprobantes_en_el_econcar_pro_v2020.04.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Esta opción sirve para consultar los comprobantes ingresados por el
        módulo de e-Concar Pro y el sistema Concar CB. Además de poder consultar
        el registro de los Comprobantes de Facturación Electrónica.
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
