import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Tabla de cierre 2011-2019 Cabecera",
      href: "//miconcar-uploads.s3.amazonaws.com/documentos/2023/11/44_CICXX1.DBF",
    },
    {
      id: 2,
      title: "Tabla de cierre 2011-2019 Detalle",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/11/44_44_CIDXX1.DBF",
    },
    {
      id: 3,
      title: "Tabla de cierre 2020 - hacia adelante Cabecera",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/11/44_CCEXX1.dbf",
    },
    {
      id: 4,
      title: "Tabla de cierre 2020 - hacia adelante Detalle",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/11/44_44_CDEXX1.dbf",
    },
    {
      id: 5,
      title: "Tablas de Cierre",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/11/44_CONCAR_CB_Tabla_de_cierre.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        En estas tablas ya vienen configuradas los asientos automáticos de
        cierre del ejercicio, son 17 asientos de cierre. Primero, se debe
        establecer la secuencia de los asientos de cierre y las cuentas que se
        van a cerrar o transferir en cada paso. Cada asiento de cierre se
        identifica por un número de asiento y generará automáticamente un
        comprobante contable.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
