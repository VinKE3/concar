import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Error en Fecha o Moneda del Comprobante",
      href: "https://miconcar.com/uploads/documentos/702_CONCAR_SQL_Error_en_fecha_o_moneda_del_comprobante.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso</h1>
      <p>
        Qué hacer si hubo un error al registrar la moneda o la fecha de un
        comprobante:
      </p>
      <Image
        alt="error-fecha-moneda-comprobante"
        src="https://miconcar.com/uploads/documentos/concar_cb_comprobante_error_1.jpg"
        width={500}
        height={300}
      />
      <Table items={data} />
    </div>
  );
};

export default page;
