import Table from "@/components/Table";
import React from "react";

const PbdMensualExportadores = () => {
  const data = [
    {
      id: 1,
      title: "PDB Mensual Exportadores",
      href: "https://miconcar.com/uploads/documentos/397_CONCAR_SQL_Pdb_mensual_exportadores.pdf",
    },
  ];
  return (
    <div>
      <p>
        Este menú contiene las opciones para generar los archivos a cargar en el
        PDB SUNAT. Estos son: PDB Compras, PDB Ventas y PDB Tipos de Cambio.
      </p>
      <Table items={data} />
    </div>
  );
};

export default PbdMensualExportadores;
