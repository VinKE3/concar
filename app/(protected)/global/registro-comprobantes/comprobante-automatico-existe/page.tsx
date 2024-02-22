import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Comprobante Automático ya Existe",
      href: "https://miconcar.com/uploads/documentos/794_CONCAR_SQL_Comprobante_automatico_ya_existe.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso</h1>
      <p>
        Al registrar un comprobante por la opción Comprobante Estandar con ó sin
        Conversión, el sistema muestra el siguiente mensaje:
      </p>
      <Image
        alt="comprobante-automatico-existe"
        src="https://miconcar.com/uploads/documentos/DOC16.jpg"
        width={500}
        height={300}
      />
      <Table items={data} />
    </div>
  );
};

export default page;
