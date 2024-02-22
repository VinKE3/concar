import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "como solucionar procesos de lentitud en el sistema concar sql - baja log",
      href: "https://miconcar.com/uploads/documentos/1151_Cod.01151_D01138_como_solucionar_procesos_de_lentitud_en_el_sistema_concarsql_bajalog.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Segun manual adjunto, detallamos el proceso del Baja Log - para mejorar
        el funcionamiento del Concar SQL en las funcionalidades del mismo. Se
        recomienda que el mismo sea ejecutado por su personal e TI - Sistemas.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
