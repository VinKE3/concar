import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Carga Masiva de Anexos en el e-CONCAR PRO",
      href: "https://miconcar.com/uploads/documentos/1048_C1048_D01035_carga_masiva_de_anexos_en_el_econcar_pro_v2020.04.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        La plantilla Excel será exportado desde el mismo módulo e-CONCAR PRO y
        al importar se generará la carga automática de Anexos que podrá ser
        visualizado en el Sistema CONCAR CB.
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
