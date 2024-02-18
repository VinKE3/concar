import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Diferencia de Cambio en Cuenta Detracciones",
      href: "https://miconcar.com/uploads/documentos/716_CONCAR_CB_Diferencia_de_cambio_en_cuenta_detracciones.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p className="font-bold">Caso</p>
      <p>
        Se provisiona una factura de compra con detracción en dólares. Como
        regularizar la diferencia de cambio generada en la cuenta de
        detracciones después del pago de la detracción.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
