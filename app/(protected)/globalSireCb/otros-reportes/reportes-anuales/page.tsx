import Table from "@/components/Table";
import React from "react";

const ReportesAnuales = () => {
  const data = [
    {
      id: 1,
      title: "Reportes Anuales",
      href: "https://miconcar.com/uploads/documentos/93_CONCAR_CB_Reportes_anuales.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">8.5 Reportes Anuales</h1>
      <h1 className="font-bold">8.5.1 Movimiento Anual por Cuenta</h1>
      <p>
        Emite reporte en que se muestran saldo inicial (de la apertura), cargos,
        abonos y saldo actual por cuenta, mes a mes de un rango de meses
        seleccionado.
      </p>
      <Table items={data} />
    </div>
  );
};

export default ReportesAnuales;
