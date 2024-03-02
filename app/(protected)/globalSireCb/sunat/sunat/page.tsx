import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "page",
      href: "https://miconcar.com/uploads/documentos/399_CONCAR_SQL_Sunat.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Este módulo contiene las opciones para generar los archivos planos
        (archivos de texto) que se declaran en los programas de SUNAT: PDT601,
        DAOT, PDT3550, PDT RENTA ANUAL y PDB Mensual Exportadores. Se recomienda
        crear una carpeta previamente para guardar los archivos generados de
        modo que sea más fácil su ubicación al momento de importarlos desde los
        programas de SUNAT.
      </p>
      <Image
        alt="sunat"
        src="https://miconcar.com/uploads/documentos/concar_cb_menu_sunat_.jpg"
        width={600}
        height={500}
      />
    </div>
  );
};

export default page;
