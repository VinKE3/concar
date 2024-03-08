import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Manual PLE Inventarios y Balances",
      href: "https://miconcar.com/uploads/documentos/1002_Manual_ple_5.0_Inventarios_y_Balances_CB.pdf",
    },
    {
      id: 2,
      title: "PPT - Libros Electrónicos",
      href: "https://miconcar.com/uploads/documentos/1002_PPT_Real_Systems_-_Taller_Libros_Electronicos.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        El presente documento contiene las instrucciones para que el usuario
        pueda Configurar y generar los archivos de texto para los formatos de
        Inventarios y Balances e informar los Libros Electrónicos a SUNAT por
        medio de su aplicación PLE 5.0.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
