import Table from "@/components/Table";
import React from "react";

const ReportesEstadosCuenta = () => {
  const data = [
    {
      id: 1,
      title: "Reporte Estados de Cuenta",
      href: "https://miconcar.com/uploads/documentos/92_CONCAR_CB_Reporte_estados_de_cuenta.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">8.4 Reporte Estados de Cuenta</h1>
      <p>
        Esta opción contiene reportes en los que se podrán apreciar los cargos,
        abonos y saldos de todas las cuentas contables a nivel analítico, sin
        importar el nivel de saldo que tenga la cuenta.
      </p>
      <Table items={data} />
    </div>
  );
};

export default ReportesEstadosCuenta;
