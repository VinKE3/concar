import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "como se realiza el registro de compras y ventas con descuento en el sistema",
      href: "https://miconcar.com/uploads/documentos/1147_Cod.01147_D001134_como_se_realiza_el_registro_de_compras_y_ventas_con_descuento.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Segun Manual adjunto se detalla dos casos practicos, para registrar
        Compras y Ventas con Descuento en el sistema Concar.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
