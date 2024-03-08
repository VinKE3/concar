import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Información Real Key",
      href: "https://miconcar.com/uploads/documentos/137_Doc._137_-_ARCHIVOS_DE_RENOVACI%C3%93N_DE_TODOS_LOS_SISTEMAS.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Al ingresar a dicha opción, el sistema le mostrará las características{" "}
      </p>
      <h1>
        <span className="font-bold">Número de serie:</span> Es el número de la
        licencia.
      </h1>
      <h1>
        <span className="font-bold">Número de licencias:</span> La cantidad de
        licencias, por ser una llave local dice 1, podría ser una llave remota
        de esa manera tendría más de 1.
      </h1>
      <h1>
        <span className="font-bold">Soporte técnico:</span> De esa manera Real
        Systems controla la vigencia de servicio post venta, es 1 año el
        servicio post venta, de esta manera los usuarios están informados hasta
        que fecha podría hacer uso de las nuevas versiones del software.
      </h1>
      <h1>
        <span className="font-bold">Fecha Versión:</span> Hace referencia al
        sistema adquirido.
      </h1>
      <Table items={data} />
    </div>
  );
};

export default page;
