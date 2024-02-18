import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Cómo generar los libros electrónicos de Registro de Compras y Ventas",
      href: "https://miconcar.com/uploads/documentos/146_CONCAR_CB_Como_generar_los_libros_electronicos_de_registro_de_compras_y_ventas.pdf",
    },
    {
      id: 2,
      title: "Orientación Tributaria SUNAT sobre Libros Electrónicos",
      href: "https://orientacion.sunat.gob.pe/index.php?option=com_content&view=category&layout=blog&id=81&Itemid=130",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Descripción del problema</h1>

      <p>
        Procedimiento para poder realizar el proceso de generación de los libros
        electrónicos para SUNAT en el sistema CONCAR®
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
