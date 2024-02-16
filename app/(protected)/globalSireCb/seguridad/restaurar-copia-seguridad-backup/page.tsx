import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Restauración de Backup.",
      href: "https://miconcar.com/uploads/documentos/920_Placar_CB_Restauracion_Backup1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        ARCHIVOS Y ENLACES DETALLE DESCARGA Restauración de Backup. Descargar
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
