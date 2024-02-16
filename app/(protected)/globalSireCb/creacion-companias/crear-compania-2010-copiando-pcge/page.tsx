import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Caso 2: Crear compañía del 2010 copiando el PCGE previamente configurado en otra compañía, en el ejercicio 2010.",
      href: "https://miconcar.com/uploads/documentos/787_CONCAR_CB_Caso_2_crear_compa%C3%B1ia_del_2010_copiando_el_PCGE_previamente_configurado_en_otra_compa%C3%B1ia_en_el_ejercicio_2010.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso 2:</h1>
      <p>
        Crear compañía del 2010 copiando el PCGE previamente configurado en otra
        compañía, en el ejercicio 2010 o anterior.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
