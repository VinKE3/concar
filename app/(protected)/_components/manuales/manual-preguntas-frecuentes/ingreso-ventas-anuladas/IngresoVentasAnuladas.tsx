import Table from "@/components/Table";
import React from "react";

const IngresoVentasAnuladas = () => {
  const data = [
    {
      id: 1,
      title: "Ingreso de Ventas Anuladas",
      href: "https://miconcar.com/uploads/documentos/186_CONCAR_SQL_Ingreso_de_ventas_anuladas.pdf",
    },
  ];
  return (
    <div>
      <h1 className="font-bold">Descripción del problema</h1>
      <p>Forma de ingresar al sistema comprobantes de ventas anuladas.</p>
      <Table items={data} />
    </div>
  );
};

export default IngresoVentasAnuladas;
