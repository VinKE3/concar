import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Pago del IGV no debe mostrarse en el Registro de Compras",
      href: "https://miconcar.com/uploads/documentos/715_CONCAR_CB_Pago_del_igv_no_debe_mostrarse_en_el_registro_de_compras1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso:</h1>
      <p>
        Cuando pago el IGV este aparece en el registro de compras, mostrando en
        información del proveedor ANEXO
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
