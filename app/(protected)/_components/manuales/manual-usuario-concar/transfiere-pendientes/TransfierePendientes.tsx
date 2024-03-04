import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Transfiere Pendientes Año Anterior",
      href: "https://miconcar.com/uploads/documentos/109_CONCAR_CB_Transfiere_pendientes_a%C3%B1o_anterior.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Transfiere Pendientes Año Anterior </h1>
      <p>
        Esta opción permite transferir documentos no conciliados de años
        anteriores. Se requiere haber realizado la conciliación bancaria
        definitiva de todos los meses del ejercicio anterior.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
