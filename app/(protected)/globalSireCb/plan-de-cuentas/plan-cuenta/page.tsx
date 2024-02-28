import Table from "@/components/Table";
import React from "react";

const page = () => {
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

      <Table items={data} />
    </div>
  );
};

export default page;
