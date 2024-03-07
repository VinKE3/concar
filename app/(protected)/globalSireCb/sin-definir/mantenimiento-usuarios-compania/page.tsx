import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Mantenimiento de Usuario Compañía",
      href: "https://miconcar.com/uploads/documentos/662_PLACAR_CB_Mantenimiento_de_usuario_compa%C3%B1ia.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Esta opción permite amarrar al usuario con una compañía específica, para
        que cuando el usuario ingrese al sistema solo maneje las compañías
        seleccionadas.
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
