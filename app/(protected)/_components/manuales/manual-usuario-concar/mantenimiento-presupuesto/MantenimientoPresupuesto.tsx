import Table from "@/components/Table";
import React from "react";

const MantenimientoPresupuesto = () => {
  const data = [
    {
      id: 1,
      title: "Mantenimiento Presupuesto",
      href: "https://miconcar.com/uploads/documentos/347_CONCAR_SQL_Mantenimiento_presupuesto.pdf",
    },
  ];
  return (
    <div>
      <p>
        Proceso que registra en forma masiva los importes de la configuración de
        presupuesto para el ejercicio actual. El formulario tiene la
        características de mostrar los importes mes por mes por cada ítem de
        cuenta, el usuario podrá digitar el importe correspondiente por una
        cuenta a uno o varios meses según el caso o exportarlo los ítems desde
        un archivo Excel.
      </p>
      <Table items={data} />
    </div>
  );
};

export default MantenimientoPresupuesto;
