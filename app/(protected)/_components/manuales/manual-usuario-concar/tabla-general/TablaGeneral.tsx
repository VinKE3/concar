import Table from "@/components/Table";
import React from "react";

const TablaGeneral = () => {
  const data = [
    {
      id: 1,
      title: "Tabla General",
      href: "https://miconcar.com/uploads/documentos/294_4.03._CONCAR_SQL_Tabla_General_294.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        En esta opción están registradas todas las tablas creadas para el
        funcionamiento del sistema. El usuario no podrá crear nuevas tablas;
        salvo lo indicado en este manual o por un consultor.
      </p>
      <Table items={data} />
    </div>
  );
};

export default TablaGeneral;
