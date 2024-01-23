import Table from "@/components/Table";
import React from "react";

const AsientosAutomaticos = () => {
  const data = [
    {
      id: 1,
      title: "Asientos Automáticos",
      href: "https://miconcar.com/uploads/documentos/321_5.14_CONCAR_SQL_Asientos_Automaticos.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        El sistema genera los asientos de apertura en forma automática, después
        de procesado el cierre del ejercicio anterior (excepto el último asiento
        de cierre
      </p>
      <p>
        Para generar este asiento es necesario procesar los asientos de cierre
        hasta antes de generar el asiento que salda las cuentas del Activo,
        Pasivo y Patrimonio (asiento 17).
      </p>
      <Table items={data} />
    </div>
  );
};

export default AsientosAutomaticos;
