import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Registro de Gastos de Caja Chica o Fondo Fijo",
      href: "https://miconcar.com/uploads/documentos/743_CONCAR_SQL_Registro_de_gastos_de_caja_chica_o_fondo_fijo1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso 1</h1>
      <h1>
        Cómo registrar gastos de caja chica o fondo fijo, que se muestren en el
        Formato 8.1 Registro de Compras.
      </h1>
      <Table items={data} />
    </div>
  );
};

export default page;
