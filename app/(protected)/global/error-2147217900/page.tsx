import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "como se soluciona el mensaje error en tiempo de ejecución - error 2147217900 en el sistema concarsql",
      href: "https://miconcar.com/uploads/documentos/1152_Cod.01152_D01139_como_se_soluciona_el_mensaje_error_en_tiempo_de_ejecuci%C3%B3n_error_2147217900_en_el_sistema_concarsql.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Segun Manual adjunto detallamos como solucionar si se les presenta un
        mensaje similar {"Error en Tiempo de Ejecucion"}, se recomienda que el
        mismo sea realizado por su personal de Sistemas.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
