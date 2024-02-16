import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Mantenimiento Compañías",
      href: "https://miconcar.com/uploads/documentos/123_CONCAR_CB_Mantenimiento_compa%C3%B1ias.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Esta opción permite administrar las compañías que se van a trabajar en
        el sistema dada su característica de ser multicompañía. Es posible crear
        una nueva compañía, modificar datos generales de las compañías y crear
        un nuevo ejercicio contable.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
