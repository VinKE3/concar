import List from "@/components/List";
import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Webinar Análisis de Información y Generación de Reportes",
      href: "https://miconcar.com/uploads/documentos/88_Webinar_An%C3%A1lisis_de_Informaci%C3%B3n_y_Generaci%C3%B3n_de_Reportes.pdf",
    },
  ];
  const data2 = [
    {
      id: 1,
      title: "8.01 Generación Archivo Saldo documento",
      href: "https://miconcar.com/uploads/documentos/338_CONCAR_SQL_Analisis_cuenta.pdf",
    },
    {
      id: 2,
      title: "8.02 Consultas",
      href: "https://miconcar.com/uploads/documentos/339_CONCAR_SQL_Analisis_cuenta_por_centro_de_costo.pdf",
    },
    {
      id: 3,
      title: "8.03 Reportes",
      href: "https://miconcar.com/uploads/documentos/340_CONCAR_SQL_Analisis_cuenta_por_centro_de_costo.pdf",
    },
    {
      id: 4,
      title: "8.04 Reporte Estados de Cuenta",
      href: "https://miconcar.com/uploads/documentos/340_CONCAR_SQL_Analisis_cuenta_por_centro_de_costo.pdf",
    },
    {
      id: 5,
      title: "8.05 Reportes Anuales",
      href: "https://miconcar.com/uploads/documentos/340_CONCAR_SQL_Analisis_cuenta_por_centro_de_costo.pdf",
    },
    {
      id: 6,
      title: "8.06 Análisis Gráfico Estados Financieros",
      href: "https://miconcar.com/uploads/documentos/340_CONCAR_SQL_Analisis_cuenta_por_centro_de_costo.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Este módulo permite consultar y emitir reportes de saldos por cuenta y
        anexos, documentos pendientes en forma selectiva a cualquier fecha de
        saldo y estados de cuentas en línea y sin efectuar ningún proceso
        previo.
      </p>
      <p>Para emitir aquellos reportes que tienen el símbolo</p>
      <Image
        alt="check"
        src="https://miconcar.com/uploads/documentos/visto.jpg"
        width={35}
        height={35}
      />
      <p>
        al lado izquierdo, se tendrá que realizar el proceso Generación Archivo
        Saldo Documento.
      </p>
      <p>A continuación el detalle de las opciones de este módulo:</p>
      <List items={data2} />
      <Table items={data} />
    </div>
  );
};

export default page;
