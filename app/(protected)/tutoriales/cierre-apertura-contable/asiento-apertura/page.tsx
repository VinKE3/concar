import React from "react";
import Heading from "@/components/Heading";
import Table from "@/components/Table";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Asiento de Apertura",
      href: "https://miconcar.com/uploads/documentos/822_CONCAR_SQL_Asiento_de_apertura.pdf",
    },
  ];
  return (
    <>
      <p>
        El sistema genera los asientos de apertura en forma automática, después
        de procesado el cierre del ejercicio anterior (excepto el último asiento
        de cierre). Para generar este asiento es necesario procesar los asientos
        de cierre hasta antes de generar el asiento que salda las cuentas del
        Activo, Pasivo y Patrimonio (asiento 17).
      </p>
      <Table items={data} />
    </>
  );
};

export default page;
