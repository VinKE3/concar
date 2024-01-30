import Heading from "@/components/Heading";
import Table from "@/components/Table";
import React from "react";

const ComoGenerarMesMovimiento = () => {
  const data = [
    {
      id: 1,
      title:
        "Procedimiento para la generación del archivo TXT del libro electrónico de compras de un mes sin movimiento.",
      href: "https://miconcar.com/uploads/documentos/899_CONCAR_SQL_Como_generar_el_libro_electronico_de_compras_de_un_mes_sin_movimiento.pdf",
    },
  ];
  return (
    <>
      <p>
        Procedimiento para la generación del archivo TXT del libro electrónico
        de compras de un mes sin movimiento.
      </p>
      <Table items={data} />
    </>
  );
};

export default ComoGenerarMesMovimiento;
