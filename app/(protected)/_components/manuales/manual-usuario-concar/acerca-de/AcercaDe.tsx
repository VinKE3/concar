import List from "@/components/List";
import Table from "@/components/Table";
import { dataManualUsuario } from "@/data/manuales.data";
import Image from "next/image";
import React from "react";

const AcercaDe = () => {
  const newData = dataManualUsuario.slice(94, 96);
  const data = [
    {
      id: 1,
      title: "13.03_CONCAR_SQL_Acerca_de.pdf",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/12/Manual_Capacitaci%C3%B3n_Concar_CB_Basico.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Incluye términos de licencia y opciones relacionadas con la llave Real
        Key.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/acerca_de_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={800}
        height={500}
      />
      <p>A continuación el detalle de las opciones de este módulo:</p>
      <List items={newData} />
      <Table items={data} />
    </div>
  );
};

export default AcercaDe;
