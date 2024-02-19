import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Proceso de Consulta - Editar- Procesar y Cierre en el e-CONCAR PRO",
      href: "https://miconcar.com/uploads/documentos/1055_C1055_D01042_proceso_de_consulta_editar_procesar_y_cierre_en_el_econcar_pro_v2020.04.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Una vez efectuado el calculo de su Pre Liquidacion de Impuestos Mensual,
        el sistema le permite realizar consultas de ese periodo o periodo
        anteriores, editar valores consignados y cerrar el mes calculado.
      </p>
      <p>
        Para conocer el funcionamiento te invito que revises el documento
        adjunto líneas abajo
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
