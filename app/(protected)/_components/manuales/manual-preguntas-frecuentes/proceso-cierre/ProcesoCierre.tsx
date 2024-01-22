import Table from "@/components/Table";
import React from "react";

const ProcesoCierre = () => {
  const data = [
    {
      id: 1,
      title: "Ejemplo de Tablas de Cierre",
      href: "https://miconcar.com/uploads/documentos/28_concar_sql_preguntas_frecuentes_configuracion_tablas_de_cierre_.pdf",
    },
    {
      id: 2,
      title: "Proceso de Cierre",
      href: "https://miconcar.com/uploads/documentos/28_CONCAR_SQL_Proceso_de_cierre.pdf",
    },
  ];
  return (
    <div>
      <h1 className="font-bold">Descripción del problema</h1>
      <p>
        Procedimiento para poder realizar el proceso de Cierre Contable en el
        sistema CONCAR®.
      </p>
      <Table items={data} />
    </div>
  );
};

export default ProcesoCierre;
