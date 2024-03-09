import List from "@/components/List";
import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Cómo Generar los Libros Electrónicos Diario, Diario Simplificado y Mayor.",
      href: "/globalSireCb/facturas-electronicas/generacion-libro-diario-simplificado",
    },
    {
      id: 2,
      title:
        "Registro de Omisiones en los Libros Electrónicos Diario, Diario Simplificado y Mayor.",
      href: "/globalSireCb/facturas-electronicas/registro-omisiones-libro-diario-simplificado",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Este tutorial contiene:</p>

      <List items={data} />
    </div>
  );
};

export default page;
