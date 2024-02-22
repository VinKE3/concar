import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Registro de Ticket de Venta",
      href: "https://miconcar.com/uploads/documentos/736_CONCAR_CB_Registro_de_ticket_de_venta1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p className="font-bold">Caso</p>
      <p>Cómo registrar un ticket de venta.</p>

      <Table items={data} />
    </div>
  );
};

export default page;
