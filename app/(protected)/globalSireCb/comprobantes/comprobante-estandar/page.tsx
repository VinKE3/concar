import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Comprobante Estándar con Conversión",
      href: "https://miconcar.com/uploads/documentos/51_CONCAR_CB_Comprobante_estandar_con_conversion.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Mediante esta opción se puede registrar en el sistema cualquier asiento
        de diario como son: Bancos, caja, planillas, costos, canjes,
        cancelaciones de clientes y otros; exceptuando los registros por
        compras, ventas, honorarios y cheques.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
