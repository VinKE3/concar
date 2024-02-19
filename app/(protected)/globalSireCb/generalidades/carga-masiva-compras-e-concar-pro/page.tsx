import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Carga Masiva de Registro de Compras en el e-CONCAR PRO",
      href: "https://miconcar.com/uploads/documentos/1049_C1049_D01036_carga_masiva_de_registro_de_compras_en_el_econcarpro_v2020.04.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Entre las nuevas funcionalidades que se presenta en el modulo e-CONCAR
        PRO, se ha desarrollado la carga masiva en Excel de aquellas
        adquisiciones con una estructura similar al registro de compras Formato
        8.1. que utilizamos en el CONCAR CB.
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
