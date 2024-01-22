import Table from "@/components/Table";
import React from "react";

const ElementoOrdinalSolicitado = () => {
  const data = [
    {
      id: 1,
      title:
        "No se encontró el elemento que corresponde al elemento u ordinal solicitado",
      href: "https://miconcar.com/uploads/documentos/183_CONCAR_SQL_No_se_encontro_el_elemento_que_corresponde_al_elemento_u_ordinal_solicitado.pdf",
    },
  ];
  return (
    <div>
      <h1 className="font-bold">Descripción del problema</h1>
      <p>
        Error que indica que no se encontró el elemento que corresponde al
        elemento u ordinal solicitado.{" "}
      </p>
      <Table items={data} />
    </div>
  );
};

export default ElementoOrdinalSolicitado;
