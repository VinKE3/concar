import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Proceso Consolidación",
      href: "https://miconcar.com/uploads/documentos/67_CONCAR_CB_Proceso_consolidacion.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Este proceso realiza en forma específica lo siguiente:</p>
      <ul className="list-disc px-5">
        <li>Actualiza los saldos de las cuentas</li>
        <li>Genera las cuentas automáticas de destinos</li>
        <li>Revisa que todos los comprobantes estén finalizados en el mes</li>
      </ul>
      <p>
        IMPORTANTE: Nadie debe estar trabajando en la compañía a procesar para
        poder realizar la consolidación.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
