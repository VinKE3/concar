import TablaDocumentosRelacionados from "@/components/TablaDocumentosRelacionados";
import Table from "@/components/Table";
import React from "react";

const TablaCierre = () => {
  const data = [
    {
      id: 1,
      title: "Tabla de Cierre",
      href: "https://miconcar.com/uploads/documentos/298_4.07._CONCAR_SQL_Tabla_Cierre_298.pdf",
    },
    {
      id: 2,
      title: "Tabla de cierre - Cabecera",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/12/298_CICXX.DBF",
    },
    {
      id: 3,
      title: "Tabla de cierre - Detalle",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/12/298_CIDXX.DBF",
    },
  ];
  const dataDocumentosRelacionados = [
    {
      id: 1,
      title: "CIERRE - Proceso de Cierre",
      description:
        "Procedimiento para poder realizar el proceso de Cierre Contable en el sistema CONCAR®",
      href: "https://miconcar.com/uploads/documentos/298_4.07._CONCAR_SQL_Tabla_Cierre_298.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1>
        En esta tabla ya viene configurada con los asientos automáticos de
        cierre del ejercicio, son 17 asientos de cierre. Primero, se debe
        establecer la secuencia de los asientos de cierre y las cuentas que se
        van a cerrar o transferir en cada paso. Cada asiento de cierre se
        identifica por un número de asiento y generará automáticamente un
        comprobante contable.
      </h1>
      <Table items={data} />
      <TablaDocumentosRelacionados items={dataDocumentosRelacionados} />
    </div>
  );
};

export default TablaCierre;
