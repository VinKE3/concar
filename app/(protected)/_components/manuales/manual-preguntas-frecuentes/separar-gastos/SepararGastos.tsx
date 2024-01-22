import Table from "@/components/Table";
import React from "react";

const SepararGastos = () => {
  const data = [
    {
      id: 1,
      title:
        "Cómo separar Gastos No Gravados (inafectos o exonerados) en el Registro de Compras",
      href: "https://miconcar.com/uploads/documentos/26_CONCAR_SQL_Como_separar_gastos_no_gravados_inafectos_o_exonerados_en_el_registro_de_compras.pdf",
    },
  ];
  return (
    <div>
      <h1>
        Procedimiento para que los Gastos No Gravados (inafectos o exonerados)
        incluidos en documentos que tienen parte Gravada salgan en la columna de
        Adquisiciones No Gravadas en el Registro de Compras del sistema CONCAR®
      </h1>
      <Table items={data} />
    </div>
  );
};

export default SepararGastos;
