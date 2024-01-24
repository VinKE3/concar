import Table from "@/components/Table";
import React from "react";

const RegistrarEstadosCuenta = () => {
  const data = [
    {
      id: 1,
      title: "Registro Estados Cuenta",
      href: "https://miconcar.com/uploads/documentos/345_CONCAR_SQL_Registro_estados_cuentas1.pdf",
    },
  ];
  return (
    <div>
      <p>
        Esta opción permite registrar y visualizar los movimientos bancarios
        reportados por el banco.
      </p>
      <Table items={data} />
    </div>
  );
};

export default RegistrarEstadosCuenta;
