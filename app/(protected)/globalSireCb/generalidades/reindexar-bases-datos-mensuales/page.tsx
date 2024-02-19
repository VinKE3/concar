import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Reindexar Bases Datos Mensuales",
      href: "https://miconcar.com/uploads/documentos/121_CONCAR_CB_Reindexar_bases_datos_mensuales.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Esta opción permite reordenar, entre otras, las siguientes bases de
        datos:
      </p>
      <ul className="font-bold px-5">
        <li>Movimiento Mensual</li>
        <li>Conciliación Bancaria</li>
        <li>Regularización y Ajuste por Diferencia de Cambio</li>
        <li>Balances y Análisis de Cuenta</li>
      </ul>
      <Table items={data} />
    </div>
  );
};

export default page;
