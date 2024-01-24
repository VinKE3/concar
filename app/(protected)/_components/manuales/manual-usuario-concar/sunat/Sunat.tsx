import Table from "@/components/Table";
import React from "react";

const Sunat = () => {
  const data = [
    {
      id: 1,
      title: "SUNAT",
      href: "https://miconcar.com/uploads/documentos/399_CONCAR_SQL_Sunat.pdf",
    },
  ];
  return (
    <div>
      <p>
        Este módulo contiene las opciones para generar los archivos planos
        (archivos de texto) que se declaran en los programas de SUNAT: PDT
        Honorarios, DAOT, PDT3550, PDT Renta Anual, PDB Mensual Exportadores,
        PDT658 y PDT621.
      </p>
      <Table items={data} />
    </div>
  );
};

export default Sunat;
