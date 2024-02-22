import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Importaciones - Constancia de Pago del IGV - Servicios de No Domiciliado",
      href: "https://miconcar.com/uploads/documentos/725_CONCAR_CB_Importaciones_constancia_de_pago_del_igv_servicios_de_no_domiciliado.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso</h1>

      <p>
        Cómo mostrar el número del comprobante del servicio del exterior (no
        domiciliado) en formato 8.1 Registro de Compras y libro electrónico de
        compras.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
