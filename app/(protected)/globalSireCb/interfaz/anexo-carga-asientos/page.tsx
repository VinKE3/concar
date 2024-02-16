import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Anexos II y III: Carga de asientos desde otros sistemas",
      href: "https://miconcar.com/uploads/documentos/139_CONCAR_CB_Anexos_II_y_III_carga_de_asientos_desde_otros_sistemas.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">
        ANEXO II: CARGA DE ASIENTOS DESDE OTROS SISTEMAS
      </h1>
      <p>
        El CONCAR permite incluir asientos contables generados en forma
        automática desde otros sistemas del usuario. Por ejemplo: Si se dispone
        de un Sistema de Facturación, el usuario puede preparar un programa para
        producir el asiento contable y grabarlo en un archivo en un USB o disco
        duro y luego cargar este asiento en el CONCAR, evitándose la digitación.
        Estos asientos pueden producirse en forma diaria, semanal, mensual y la
        afectación contable y numeración de comprobantes deben ser definidas por
        el usuario contable.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
