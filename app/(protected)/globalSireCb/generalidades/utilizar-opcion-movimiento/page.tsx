import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Cómo utilizar la opción de Movimiento Datos del menú Utilitarios",
      href: "https://miconcar.com/uploads/documentos/142_CONCAR_CB_Como_utilizar_la_opcion_de_movimientos_datos_del_menu_utilitarios.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Descripción del problema</h1>
      <p>
        Procedimiento para poder utilizar las opciones de Movimiento Datos en el
        sistema CONCAR®
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
