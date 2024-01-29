import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Guia_de_Usuario_Cierre_2022_y_Apertura_2023_Concarsql",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/02/1203_Cod.1203_D01190_Guia_de_Usuario_Cierre_2022_y_Apertura_2023_Concarsql.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Se adjunta el manual con los procesos a detalle para realizar el cierre
        del periodo y la apertura del siguiente periodo en el concar sql, lo
        pueden descargar:
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
