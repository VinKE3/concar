import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Registro de Control",
      href: "https://miconcar.com/uploads/documentos/430_PLACAR_CB_Registro_de_control.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Esta opción debe ser utilizada inmediatamente después de crear una nueva
        empresa.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
