import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Que contiene la Tabla General",
      href: "https://miconcar.com/uploads/documentos/1062_Cod.1062_D01049_que_contiene_la_tabla_general.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1>Todas las opciones anteriores se encuentran en desuso:</h1>
      <p>11.7.1 Genera previos mensuales compras</p>
      <p>11.7.2 Mantenimiento previo Facturas</p>
      <p>11.7.3 Mantenimiento previo Notas crédito</p>
      <p>11.7.4 Consulta archivo X58CPCOA Facturas</p>
      <p>11.7.5 Crea archivo X61COAPR Proveedores</p>
      <p>11.7.6 Mantenimiento archivo X61COAPR Proveedores</p>
    </div>
  );
};

export default page;
