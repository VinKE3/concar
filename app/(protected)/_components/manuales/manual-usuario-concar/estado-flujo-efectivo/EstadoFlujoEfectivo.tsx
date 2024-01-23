import Table from "@/components/Table";
import React from "react";

const EstadoFlujoEfectivo = () => {
  const data = [
    {
      id: 1,
      title: "Estado de Flujo de Efectivo",
      href: "https://miconcar.com/uploads/documentos/330_CONCAR_SQL_Estado_de_flujo_de_efectivo.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        El Estado de Flujo de Efectivo muestra el efecto de los cambios de
        efectivo y equivalentes de efectivo, en un tiempo determinado.
      </p>
      <Table items={data} />
    </div>
  );
};

export default EstadoFlujoEfectivo;
