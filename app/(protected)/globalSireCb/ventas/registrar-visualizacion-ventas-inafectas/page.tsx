import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Registro y visualización de Ventas Inafectas y Exoneradas del IGV en el Registro de Ventas",
      href: "https://miconcar.com/uploads/documentos/155_CONCAR_CB_Registro_y_visualizacion_de_ventas_inafectas_y_exoneradas_del_igv_en_el_registro_de_ventas.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Descripción del problema:</h1>
      <p>
        Configuración para que salgan en forma separada ventas inafectas y
        exoneradas del IGV en el Registro de Ventas.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
