import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Como generar los libros electrónicos SUNAT de Libro Diario, Libro Diario de Formato Simplificado y Mayor",
      href: "https://miconcar.com/uploads/documentos/689_CONCAR_CB_Como_generar_los_libros_electronicos_sunat_de_libro_diario_libro_diario_formato_simplificado_y_mayor.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">
        Registro de Omisiones para Libro Diario y Mayor
      </h1>
      <p>
        Esta opción permite incluir asientos omitidos en meses anteriores en el
        libro Diario y Mayor. Para poder incluir asientos en esta opción es
        NECESARIO que el comprobante contable omitido se registre en el MES EN
        QUE SE VA A REGUALIZAR su omisión.
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
