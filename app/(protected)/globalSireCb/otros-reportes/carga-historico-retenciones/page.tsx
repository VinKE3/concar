import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Carga de histórico de retención 5ta. Categoría.",
      href: "https://miconcar.com/uploads/documentos/912_Placar_CB_Acumulados_Quinta_Remuneracion.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Esta opción sirve para cargar las retenciones de quinta categoría y la
        remuneración acumulada de los meses anteriores, como punto de partida
        para que el sistema haga el cálculo correcto de la renta de quinta
        categoría en cualquiera de los siguientes casos:
      </p>
      <p>
        Para trabajadores con un historial de retenciones de quinta categoría
        antes del inicio de la relación laboral.
      </p>
      <p>
        Cuando el empleador aperturó la primera planilla, en el sistema PLACAR®,
        en un mes posterior a enero.
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
