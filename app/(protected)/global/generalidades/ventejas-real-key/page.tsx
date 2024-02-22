import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Ventajas de contar con el Real Key",
      href: "https://miconcar.com/uploads/documentos/580_CONCAR_CB_Ventajas_de_contar_con_el_real_key.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        La llave REAL KEY® es un dispositivo USB de seguridad y protección de
        software que permitirá el acceso a los productos de Real Systems. La
        llave de protección se utilizará en algunos de los productos a partir de
        la versión 2013.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
