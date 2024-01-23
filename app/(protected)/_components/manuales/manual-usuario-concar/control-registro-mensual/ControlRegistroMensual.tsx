import Table from "@/components/Table";
import React from "react";

const ControlRegistroMensual = () => {
  const data = [
    {
      id: 1,
      title: "Control de Registro Mensual",
      href: "https://miconcar.com/uploads/documentos/308_5.01_CONCAR_SQL_Control_de_Registro_Mensual_308-D00305.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Esta opción del sistema sirve para habilitar o bloquear los meses en los
        que se ingresan los comprobantes.
      </p>
      <Table items={data} />
    </div>
  );
};

export default ControlRegistroMensual;
