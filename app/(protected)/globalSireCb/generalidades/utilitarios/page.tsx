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
        El módulo de Utilitarios permite realizar procesos auxiliares asociados
        a la Administración del Sistema.
      </p>
      <p>Las opciones definidas en el menú Utilitarios son las siguientes:</p>
      <Image
        alt="1"
        src="https://miconcar.com/uploads/documentos/concar_cb_menu_utilitarios_.jpg"
        width={600}
        height={600}
      />
    </div>
  );
};

export default page;
