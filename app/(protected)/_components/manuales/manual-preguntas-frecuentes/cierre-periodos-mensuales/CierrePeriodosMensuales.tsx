import Table from "@/components/Table";
import React from "react";

const CierrePeriodosMensuales = () => {
  const data = [
    {
      id: 1,
      title: "Cierre o bloqueo de periodos mensuales",
      href: "https://miconcar.com/uploads/documentos/190_CONCAR_SQL_Cierre_o_bloqueo_de_periodos_mensuales.pdf",
    },
  ];
  return (
    <div>
      <h1 className="font-bold">Descripción del problema</h1>
      <p>
        Se desea cerrar (bloquear) periodos mensuales para que no se puedan
        registrar, modificar ni eliminar comprobantes.
      </p>
      <Table items={data} />
    </div>
  );
};

export default CierrePeriodosMensuales;
