import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Modificación de la Razón social",
      href: "https://miconcar.com/uploads/documentos/764_CONCAR_SQL_Modificacion_de_la_razon_social.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso</h1>
      <p>
        Al momento de crear una empresa no se consignó su correcta o total razón
        social, o la empresa de un año a otro cambió de razón social. Por ende,
        al imprimir los libros y registros contables el sistema mostrará una
        razón social incorrecta o antigua.
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
