import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Maestro de Personal",
      href: "https://miconcar.com/uploads/documentos/431_PLACAR_CB_Mestro_de_personal.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso:</h1>
      <p>
        Mediante esta opción se podrán crear, modificar, consultar, cesar,
        reingresar trabajadores en la planilla. Los trabajadores creados no se
        pueden eliminar, sólo se pueden cesar.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
