import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "PDB Mensual Exportadores",
      href: "https://miconcar.com/uploads/documentos/116_CONCAR_CB_PDB_mensual_exportadores1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">PDB Mensual Exportadores</h1>
      <p>
        Este submenú contiene las opciones para generar los archivos a cargar en
        el PDB SUNAT. Estos son: PDB Compras, PDB Ventas y PDB Tipos de Cambio.
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
