import Table from "@/components/Table";
import React from "react";

const AsientosAutomaticos = () => {
  const data = [
    {
      id: 1,
      title: "Asientos Automáticos",
      href: "https://miconcar.com/uploads/documentos/64_CONCAR_CB_Asientos_automaticos.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Asiento de Apertura</h1>
      <p>
        El sistema genera el asiento de apertura en forma automática siempre que
        se haya ingresado información en el año anterior y se haya procesado
        previamente el cierre anual (excepto el último asiento de cierre). Para
        generar este asiento NO SE DEBERÁ procesar el último asiento de cierre
        Nº 17 (el que salda las cuentas del Activo, Pasivo y Patrimonio). Para
        lograr la generación del asiento apertura es necesario haber realizado
        un Proceso de Consolidación Definitiva al mes de Diciembre del ejercicio
        anterior.
      </p>

      <Table items={data} />
    </div>
  );
};

export default AsientosAutomaticos;
