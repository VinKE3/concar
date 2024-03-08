import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Error 9 en Tiempo de Ejecución al consolidar",
      href: "https://miconcar.com/uploads/documentos/154_CONCAR_CB_Error_9_en_tiempo_de_ejecucion_al_consolidar.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Descripción del problema</h1>
      <p>
        Error 9 en Tiempo de Ejecución al efectuar el proceso de consolidación
        mensual.
      </p>
      <Image
        alt="Error 9 en Tiempo de Ejecución al consolidar"
        src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_error_9_en_tiempo_de_ejecucion_1_.jpg"
        width={550}
        height={550}
      />
      <Table items={data} />
    </div>
  );
};

export default page;
