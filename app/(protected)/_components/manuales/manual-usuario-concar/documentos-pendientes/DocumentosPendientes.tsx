import Table from "@/components/Table";
import React from "react";

const DocumentosPendientes = () => {
  const data = [
    {
      id: 1,
      title: "Documentos Pendientes",
      href: "https://miconcar.com/uploads/documentos/340_CONCAR_SQL_Documentos_pendientes.pdf",
    },
  ];
  return (
    <div>
      <p>
        Permite emitir reportes de los saldos de las cuentas 12X hasta la 47X.
        Las cuentas que pueden ser analizadas en este proceso son aquellas que
        han sido definidas con nivel de saldo en el Mantenimiento de Plan de
        Cuentas.
      </p>
      <Table items={data} />
    </div>
  );
};

export default DocumentosPendientes;
