import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Error de Automatización.",
      href: "https://miconcar.com/uploads/documentos/917_concar_cb_c1_1_error_de_automatizacion_v1_.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Luego de haber actualizado o instalado el sistema CONCAR® , desde la
        versión 2015.02, y se desea ingresar el día en el mantenimiento del tipo
        de cambio, el sistema emite un mensaje cuando no se ha encontrado el
        componente necesario para comunicación con el Servicio SUNAT. Este
        componente se llama {"Componente Consulta SUNAT"}. En el documento se
        detalla el procedimiento para superar este mensaje.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
