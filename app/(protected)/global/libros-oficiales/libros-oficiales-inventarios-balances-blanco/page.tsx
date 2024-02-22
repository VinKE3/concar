import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Libros Oficiales de Inventarios y Balances en blanco",
      href: "https://miconcar.com/uploads/documentos/798_CONCAR_CB_Libros_oficiales_de_inventarios_y_balances_en_blanco1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p className="font-bold">Caso</p>
      <p>
        Al emitir los Libros Oficiales de Inventarios y Balances el sistema
        muestra el reporte en blanco a pesar que la cuenta ha tenido movimiento.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
