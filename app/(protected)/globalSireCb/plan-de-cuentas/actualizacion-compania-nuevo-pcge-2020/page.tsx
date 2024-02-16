import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "cómo realizar la actualización de compañía con el nuevo pcge 2020 si inicialmente lo creo con el plan contable 2019",
      href: "https://miconcar.com/uploads/documentos/1084_Cod.1084_D01071_c%C3%B3mo_realizar_la_actualizaci%C3%B3n_de_compa%C3%B1%C3%ADa_con_el_nuevo_pcge2020_si_inicialmente_lo_creo_con_el_plan_contable_2019.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Segun Manual adjunto detallamos el proceso a realizar para poder
        actualizar su Plan de cuentas, si creo su ejercicio 2020 con el Plan de
        Cuentas del 2019
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
