import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Que contiene la Tabla General",
      href: "https://miconcar.com/uploads/documentos/1062_Cod.1062_D01049_que_contiene_la_tabla_general.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Se incluye los términos del acuerdo de licencia y garantía limitada que
        deben ser leídos por el usuario antes de iniciar el uso del software.
        Adicionalmente, en la parte inferior de la ventana, se muestra la ruta
        en la cual se encuentra las bases de datos del CONCAR CB.
      </p>
      <Image
        alt="acerca-de-sirecb"
        src="https://miconcar.com/uploads/documentos/concar_cb_c13_1_acerca_de_.jpg"
        width={300}
        height={300}
      />
    </div>
  );
};

export default page;
