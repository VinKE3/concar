import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Cuales son los principales cambios del ple 5.2 en el sistema concar para el 2021",
      href: "https://miconcar.com/uploads/documentos/1122_Cod.1122_D01109_cuales_son_los_principales_cambios_del_ple5.2__en_el_sistema_concar_para_el_20211.pdf",
    },
  ];
  return (
    <div>
      <h1>
        Segun la Resolución de Superintendencia Nº 108-2020 / SUNAT, se ha
        realizado la actualización al sistema CONCAR.
      </h1>

      <Table items={data} />
    </div>
  );
};

export default page;
