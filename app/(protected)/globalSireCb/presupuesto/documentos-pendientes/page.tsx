import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Documentos pendientes",
      href: "https://miconcar.com/uploads/documentos/91_CONCAR_SQL_Documentos_pendientes.pdf",
    },
    {
      id: 2,
      title: "Webinar Análisis de Información y Generación de Reportes",
      href: "https://miconcar.com/uploads/documentos/91_Webinar_An%C3%A1lisis_de_Informaci%C3%B3n_y_Generaci%C3%B3n_de_Reportes.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">8.3 Documentos Pendientes</h1>
      <p>
        Permite sacar reportes de los saldos de las cuentas 12X hasta la 47X.
        Las cuentas que pueden ser analizadas en este proceso son aquellas que
        han sido definidas con nivel de saldo en el Mantenimiento de Plan de
        Cuentas.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
