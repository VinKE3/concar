import Table from "@/components/Table";
import React from "react";

const RegistrarVentasInafectas = () => {
  const data = [
    {
      id: 1,
      title:
        "Registro y visualización de Ventas a Inafectas y Exoneradas del IGV en el Registro de Ventas",
      href: "https://miconcar.com/uploads/documentos/189_CONCAR_SQL_Registro_y_visualizacion_de_ventas_a_inafectas_y_exoneradas_del_igv_en_el_registro_de_ventas.pdf",
    },
  ];
  return (
    <div>
      <h1>Descripción del problema</h1>
      <p>
        Configuración para que salgan en forma separada ventas inafectas y
        exoneradas del IGV en el Registro de Ventas.
      </p>
      <Table items={data} />
    </div>
  );
};

export default RegistrarVentasInafectas;
