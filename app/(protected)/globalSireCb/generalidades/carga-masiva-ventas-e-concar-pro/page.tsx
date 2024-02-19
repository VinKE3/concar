import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Carga Masiva de Registro de Ventas en el e-CONCAR PRO",
      href: "https://miconcar.com/uploads/documentos/1051_C1051_D01038_carga_masiva_de_registro_de_ventas_en_el_econcar_pro_v2020.04.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        En esta nueva funcionalidad del módulo e-CONCAR PRO permite cargar en
        Excel de manera masiva las transacciones, con una estructura similar al
        registro de ventas Formato 14.1 del ambiente CONCAR CB.
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
