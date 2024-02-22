import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "PPT Cierre 2021 - Apertura 2022 _SQL_I",
      href: "https://miconcar.com/uploads/documentos/1162_Cierre_2021_Y_Apertura_Contable_2022_con_Concar_SQL_I.pdf",
    },
    {
      id: 2,
      title: "PPT Cierre 2021 - Apertura 2022_SQL_II",
      href: "https://miconcar.com/uploads/documentos/1162_Cierre_2021_Y_Apertura_Contable_2022_con_Concar_SQL_II.pdf",
    },
    {
      id: 3,
      title: "PPT Cierre 2021 - Apertura 2022_SQL_III",
      href: "https://miconcar.com/uploads/documentos/1162_Cierre_2021_Y_Apertura_Contable_2022_con_Concar_SQL_III1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Podran observar y descargar el PPT del webinar sobre el proceso de
        Cierre 2021 y Apertura 2022 del Concar SQL
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
