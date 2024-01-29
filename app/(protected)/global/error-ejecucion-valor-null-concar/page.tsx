import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Como superar el mensaje error de ejecucion - valor null al procesar la conciliacion bancaria",
      href: "https://miconcar.com/uploads/documentos/1171_Cod.1171_D01158_como__superar_el_mensaje_error_de_ejecucion_valor_null_al_procesar_conciliacion_bancaria_concarsql.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Se adjunta el manual con los pasos a realizar, para superarlo...</p>

      <Table items={data} />
    </div>
  );
};

export default page;
