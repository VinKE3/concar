import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "¿Se pueden crear ejercicios anteriores en la misma compañía?",
      href: "https://miconcar.com/uploads/documentos/784_CONCAR_CB_Se_pueden_crear_ejercicios_anteriores_en_la_misma_compa%C3%B1ia.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Este módulo no es para uso en el Perú.</h1>
      <p>12.14.2 Reportes Proyecto PRA</p>
      <p>12.14.3 Balance por Proyecto</p>
      <p>12.14.4 Reporte Consolidado de Saldos</p>
      <p>12.14.5 Reporte Compras por Proyecto</p>
      <p>12.14.6 Estado Cuenta x A. Referencia Período</p>
      <p>12.14.7 Estado de Ganancias y Pérdidas por OT</p>
      <p>12.14.8 Estado de GyP x Línea Venta</p>
      <Table items={data} />
    </div>
  );
};

export default page;
