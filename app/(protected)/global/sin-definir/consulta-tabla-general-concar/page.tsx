import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="space-y-3">
      <h1 className="font-bold">3.10 CONSULTA TABLA GENERAL CONCAR</h1>
      <p>
        En este menú se podrá consultar las Tablas Generales del CONCAR SQL.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/sispag_sql_consulta_de_tabla_general_concar_1-.jpg"
        alt="tabla general concar"
        width={500}
        height={500}
      />
    </div>
  );
};

export default page;
