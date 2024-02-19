import List from "@/components/List";
import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Registro de Control",
      href: "https://miconcar.com/uploads/documentos/1062_Cod.1062_D01049_que_contiene_la_tabla_general.pdf",
    },
    {
      id: 2,
      title: "Maestro de Personal",
      href: "https://miconcar.com/uploads/documentos/1062_Cod.1062_D01049_que_contiene_la_tabla_general.pdf",
    },
    {
      id: 3,
      title: "Haberes y Descuentos Fijos",
      href: "https://miconcar.com/uploads/documentos/1062_Cod.1062_D01049_que_contiene_la_tabla_general.pdf",
    },
    {
      id: 4,
      title: "Prestamos",
      href: "https://miconcar.com/uploads/documentos/1062_Cod.1062_D01049_que_contiene_la_tabla_general.pdf",
    },
    {
      id: 5,
      title: "Acumulados quinta categoria",
      href: "https://miconcar.com/uploads/documentos/1062_Cod.1062_D01049_que_contiene_la_tabla_general.pdf",
    },
    {
      id: 6,
      title: "Derechohabiente",
      href: "https://miconcar.com/uploads/documentos/1062_Cod.1062_D01049_que_contiene_la_tabla_general.pdf",
    },
    {
      id: 7,
      title: "Descuento Judicial",
      href: "https://miconcar.com/uploads/documentos/1062_Cod.1062_D01049_que_contiene_la_tabla_general.pdf",
    },
    {
      id: 8,
      title: "Tablas por Compañía",
      href: "https://miconcar.com/uploads/documentos/1062_Cod.1062_D01049_que_contiene_la_tabla_general.pdf",
    },
    {
      id: 9,
      title: "Tablas Generales",
      href: "https://miconcar.com/uploads/documentos/1062_Cod.1062_D01049_que_contiene_la_tabla_general.pdf",
    },
    {
      id: 10,
      title: "Mantenimiento de Bancos",
      href: "https://miconcar.com/uploads/documentos/1062_Cod.1062_D01049_que_contiene_la_tabla_general.pdf",
    },
    {
      id: 11,
      title: "Mantenimiento de Turnos",
      href: "https://miconcar.com/uploads/documentos/1062_Cod.1062_D01049_que_contiene_la_tabla_general.pdf",
    },
    {
      id: 12,
      title: "Contratos",
      href: "https://miconcar.com/uploads/documentos/1062_Cod.1062_D01049_que_contiene_la_tabla_general.pdf",
    },
    {
      id: 13,
      title: "Parametrización General",
      href: "https://miconcar.com/uploads/documentos/1062_Cod.1062_D01049_que_contiene_la_tabla_general.pdf",
    },
    {
      id: 14,
      title: "Parametrización SCTR",
      href: "https://miconcar.com/uploads/documentos/1062_Cod.1062_D01049_que_contiene_la_tabla_general.pdf",
    },
  ];
  const dataTabla = [
    {
      id: 1,
      title: "Base de datos.",
      href: "https://miconcar.com/uploads/documentos/429_Placar_CB_Base_Datos.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        El sistema de planillas cuenta con un conjunto de archivos maestros
        (bases de datos) en los cuales se mantiene información referente a
        trabajadores, haberes, descuentos, préstamos tablas de motivos y en
        general toda aquella información básica para realizar el proceso de
        generación y emisión de planillas. El menú Base de Datos en diferentes
        opciones guarda esta información.
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/placar_cb_c1_base_de_datos_1_1.jpg"
        width={600}
        height={600}
      />
      <h1>A continuación el detalle de las opciones de este módulo:</h1>
      <List items={data} />
    </div>
  );
};

export default page;
