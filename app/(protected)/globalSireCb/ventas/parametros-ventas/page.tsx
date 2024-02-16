import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Parámetros de Ventas",
      href: "https://miconcar.com/uploads/documentos/77_CONCAR_CB_Parametros_de_ventas.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Registro Ventas:</h1>
      <p className="font-bold">Mantenimiento Parámetros Ventas</p>
      <p>
        Este módulo permite registrar los parámetros (Cuentas, subdiarios, tipos
        de documento) que usará el programa de Registro de Comprobantes de
        Ventas.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
