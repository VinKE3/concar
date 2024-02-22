import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Estado Cambio Patrimonio Neto",
      href: "https://miconcar.com/uploads/documentos/334_CONCAR_SQL_Estado_cambio_patrimonio_neto.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso:</h1>
      <p>
        El Estado de Cambios en el Patrimonio Neto muestra los cambios en el
        patrimonio de la empresa en un período de tiempo. Para ello el usuario
        deberá crear en la Tabla General 93- Controles varios, la clave PUANEPAT
        con descripción “N” lo cual indica el tipo de anexo que se utilizará
        para las cuentas patrimoniales.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
