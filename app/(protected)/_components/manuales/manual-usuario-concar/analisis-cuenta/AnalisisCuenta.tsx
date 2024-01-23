import Table from "@/components/Table";
import React from "react";

const AnalisisCuenta = () => {
  const data = [
    {
      id: 1,
      title: "Análisis cuenta",
      href: "https://miconcar.com/uploads/documentos/338_CONCAR_SQL_Analisis_cuenta.pdf",
    },
  ];
  return (
    <div>
      <p>
        Este módulo permite consultar y emitir reportes de saldos por cuenta y
        anexos, documentos pendientes en forma selectiva a cualquier fecha de
        saldo y estados de cuentas en línea y sin efectuar ningún proceso
        previo.
      </p>
      <Table items={data} />
    </div>
  );
};

export default AnalisisCuenta;
