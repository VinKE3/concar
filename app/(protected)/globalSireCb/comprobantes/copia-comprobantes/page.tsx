import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Copia de Comprobantes",
      href: "https://miconcar.com/uploads/documentos/65_CONCAR_CB_Copia_de_comprobantes.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        La opción colgada en el menú COMPROBANTES sirve para realizar copias de
        comprobantes registrados con anterioridad en el CONCAR CB.{" "}
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
