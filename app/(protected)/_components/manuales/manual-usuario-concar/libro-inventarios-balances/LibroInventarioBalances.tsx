import Table from "@/components/Table";
import React from "react";

const LibroInventarioBalances = () => {
  const data = [
    {
      id: 1,
      title: "Libro de Inventarios y Balances PCGR",
      href: "https://miconcar.com/uploads/documentos/335_CONCAR_SQL_Libro_de_inventarios_y_balances_pcgr.pdf",
    },
  ];
  return (
    <div>
      <p>Incluye el formato de Libro de Inventarios y Balances antiguo.</p>
      <Table items={data} />
    </div>
  );
};

export default LibroInventarioBalances;
