import Table from "@/components/Table";
import React from "react";

const PlanCuenta = () => {
  const data = [
    {
      id: 1,
      title: "Ejemplo de Configuraciones de cuentas",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/12/292_manual__concar_sql_ejemplo_de_configuraciones_.pdf",
    },
    {
      id: 2,
      title: "Plan de Cuenta",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/292_4.01._CONCAR_SQL_Plan_de_cuentas_292.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        En este archivo o base de datos se registrarán, modificarán o
        visualizarán las cuentas contables que se definan para llevar la
        contabilidad de la empresa.
      </p>
      <p>
        Se pueden utilizar cuentas hasta de 12 dígitos; asimismo, se podrán
        ingresar las cuentas tanto a 2, 3, 4 o 5 dígitos como Títulos (Tipo X) y
        también las cuentas de registro. Se recomienda utilizar 6 dígitos para
        las cuentas de registro con el fin de tener una uniformidad en el número
        de dígitos, de acuerdo a como viene estructurada la data en la Empresa
        Demo 0002 con el PCGE.
      </p>
      <Table items={data} />
    </div>
  );
};

export default PlanCuenta;
