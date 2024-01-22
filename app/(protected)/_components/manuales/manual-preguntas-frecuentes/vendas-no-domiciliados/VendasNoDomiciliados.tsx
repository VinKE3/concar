import Table from "@/components/Table";
import React from "react";

const VendasNoDomiciliados = () => {
  const data = [
    {
      id: 1,
      title: "Ventas a No Domiciliados en Libro Electrónico de Ventas",
      href: "https://miconcar.com/uploads/documentos/188_CONCAR_SQL_Ventas_a_no_domiciliados_en_libro_electronico_de_ventas.pdf",
    },
  ];
  return (
    <div>
      <h1 className="font-bold">Descripción del problema</h1>
      <p>
        Configuración para que salgan en forma correcta las ventas a no
        domiciliados en el archivo para el PLE de Ventas.
      </p>
      <Table items={data} />
    </div>
  );
};

export default VendasNoDomiciliados;
