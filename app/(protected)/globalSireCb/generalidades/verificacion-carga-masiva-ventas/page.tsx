import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Verificación de la Carga Masiva de Ventas en el e-CONCAR PRO",
      href: "https://miconcar.com/uploads/documentos/1052_C1052_D01039_verificaci%C3%B3n_de_la_carga_masiva_de_ventas_en_el_econcar_pro_v2020.04.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Este proceso verificación de la carga Masiva de Ventas es para revisar y
        confirmar que los comprobantes se hayan importado correctamente del
        módulo e-CONCAR PRO
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
