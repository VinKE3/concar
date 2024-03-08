import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Anexo I: Configurar favoritos",
      href: "https://miconcar.com/uploads/documentos/138_CONCAR_SQL_Anexo_i_configurar_favoritos.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Permite configurar atajos o accesos directos a las opciones que elija el
        usuario.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
