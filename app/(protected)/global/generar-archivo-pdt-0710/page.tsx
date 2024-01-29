import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "como generar por primera vez el archivo para el pdt 0710 renta anual ejercicio 2023 - CONCAR SQL",
      href: "https://miconcar.com/uploads/documentos/1166_Cod.1166_D01153_como_generar_por_primera_vez_el_archivo_para_el_pdt0710__renta_anual_ejercicio_2021_concarsql.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Se adjunta Manual detallado</p>

      <Table items={data} />
    </div>
  );
};

export default page;
