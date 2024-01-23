import Table from "@/components/Table";
import React from "react";

const Presupuesto = () => {
  const data = [
    {
      id: 1,
      title: "Presupuesto",
      href: "https://miconcar.com/uploads/documentos/346_CONCAR_SQL_Presupuesto.pdf",
    },
    {
      id: 2,
      title: "Webinar Presupuesto y Ratios",
      href: "https://miconcar.com/uploads/documentos/346_Presupuesto_y_Ratios.pdf",
    },
  ];
  return (
    <div>
      <p>
        Este módulo sirve para formular un presupuesto y compararlo con el
        movimiento contable. El presupuesto se puede llevar por centro de costo
        y/o por cuenta de Ganancias y Pérdidas por Función o Naturaleza.{" "}
      </p>
      <Table items={data} />
    </div>
  );
};

export default Presupuesto;
