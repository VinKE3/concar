import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Parámetros de Compras",
      href: "https://miconcar.com/uploads/documentos/78_CONCAR_CB_Parametros_de_compra.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Registro Compras</h1>
      <h2 className="font-bold">Mantenimiento Parámetros Compras</h2>
      <p>
        Este módulo del sistema permite registrar los parámetros (Cuentas,
        subdiarios, tipos de documento) que usará el programa de registro de
        comprobantes de compras.
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
