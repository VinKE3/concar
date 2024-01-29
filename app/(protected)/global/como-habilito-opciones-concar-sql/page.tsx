import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "En el ejercicio 2020, como habilito las opciones del concar sql - proceso de homologacion",
      href: "https://miconcar.com/uploads/documentos/1059_Cod1059_D01046_en_el_ejercicio_2020_como_habilito_las_opciones_del_concarsql_proceso_de_homologacion.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Al crear el Ejercicio o Compañia con el nuevo plan contable 2020 e
        ingresar al sistema, observara las opciones del Menu Principal
        deshabiliado, debera efectuar el proceso de homologacion, lo cual
        detallamos en el siguiente Manual:
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
