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
        En el presente documento se detalla el procedimiento para restaurar una
        copia de seguridad o backup.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
