import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Resultado del Ejercicio en el Estado de Cambios en el Patrimonio Neto",
      href: "https://miconcar.com/uploads/documentos/790_CONCAR_CB_Resultado_del_ejercicio_en_el_estado_de_cambios_en_el_patrimonio_neto.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p className="font-bold">Caso</p>
      <p>
        Cómo mostrar el resultado del ejercicio al emitir el Estado de Cambios
        en el Patrimonio Neto.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
