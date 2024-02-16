import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Caso 1: Crear compañía del 2010 con el PCGE que viene por defecto en el sistema.",
      href: "https://miconcar.com/uploads/documentos/786_CONCAR_CB_Caso_1_crear_compa%C3%B1ia_del_2010_con_el_PCGE_que_viene_por_defecto_en_el_sistema.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso:</h1>
      <p>
        Crear compañía del 2010 con el PCGE que viene por defecto en el sistema.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
