import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Verificación y Consulta de la Carga Masiva de Compras en el e-CONCAR PRO",
      href: "https://miconcar.com/uploads/documentos/1050_C1050_D01037_verificaci%C3%B3n_y_consulta_de_la_carga_masiva_de_compras_en_el_econcar_pro_v2020.04.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Este proceso verificación de la carga Masiva de Compras es para revisar
        y confirmar que los comprobantes se hayan importado correctamente,
        asimismo se valida que figuren en la consulta de situacion de
        comprobantes del modulo e-CONCAR PRO
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
