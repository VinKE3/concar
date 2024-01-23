import Table from "@/components/Table";
import React from "react";

const TablaTransferencia = () => {
  const data = [
    {
      id: 1,
      title: "Tabla de Transferencia",
      href: "https://miconcar.com/uploads/documentos/296_4.05._CONCAR_SQL_Tabla_de_Transferencia_296.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1>
        Esta tabla es usada cuando el Plan de cuentas está estructurado para
        trabajar los costos y gastos con las cuentas del elemento 6 y su uso es
        opcional. Esta tabla permite configurar las cuentas del elemento 9 y
        cuenta 79 que se generarán en forma automática, al ingresar una cuenta
        del elemento 6, siempre que se haya ingresado el Centro de Costo.
      </h1>
      <Table items={data} />
    </div>
  );
};

export default TablaTransferencia;
