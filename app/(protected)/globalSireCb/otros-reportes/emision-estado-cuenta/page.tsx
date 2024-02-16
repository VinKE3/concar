import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Emisión de Estado de Cuenta con Cuentas de Destino",
      href: "https://miconcar.com/uploads/documentos/696_CONCAR_CB_Emision_de_estado_de_cuenta_con_cuentas_de_destino.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso:</h1>
      <p>
        Cómo emitir un reporte de estado de cuenta donde se muestren las cuentas
        de destino o cuentas automáticas (excepto las cuentas 9x y 79x).
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
