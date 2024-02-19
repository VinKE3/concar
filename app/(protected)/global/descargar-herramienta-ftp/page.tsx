import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Como descargar la herramienta FTP",
      href: "https://miconcar.com/uploads/documentos/1102_Cod1102_D01089_como_descargar__la_herramienta_ftp.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Mediante este proceso descargaran el RS_FTP; un componente en sus
        equipos que permitira la descarga de los programas o informacion que
        enviemos de forma mas directa y segura.
      </p>
      <Image alt="ftp" src="/acceso/ftp.png" width={500} height={500} />
      <Table items={data} />
    </div>
  );
};

export default page;
