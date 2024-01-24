import Table from "@/components/Table";
import React from "react";

const MantenimientoCompanias = () => {
  const data = [
    {
      id: 1,
      title: "Mantenimiento de Compañías",
      href: "https://miconcar.com/uploads/documentos/385_CONCAR_SQL_Mantenimiento_de_compañias.pdf",
    },
  ];
  return (
    <div>
      <p>
        Esta opción permite administrar las compañías que se van a trabajar en
        el sistema dada su característica de ser multiempresa. Es posible crear
        una nueva compañía, modificar datos generales de las compañías y crear
        un nuevo ejercicio contable.{" "}
      </p>
      <Table items={data} />
    </div>
  );
};

export default MantenimientoCompanias;
