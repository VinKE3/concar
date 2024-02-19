import List from "@/components/List";
import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "6.01 Proceso Consolidación",
      href: "",
    },
    {
      id: 2,
      title: "6.02. Reapertura Mes Contable",
      href: "",
    },
    {
      id: 3,
      title: "6.03 Consulta Consolidación",
      href: "",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Esta opción se encarga de procesar los comprobantes de un mes contable
        para permitir consultar e imprimir los estados financieros y reportes
        actualizados a dicho mes. En este Proceso de Consolidación se realizan
        verificaciones y actualizaciones que permiten disponer de la información
        actualizada y precisa.
      </p>
      <p>
        El Proceso de Consolidación se puede realizar diariamente, procesándose
        los comprobantes del mes registrados hasta fecha, permitiéndose de esta
        manera disponer de información de saldos hasta dicha fecha. Antes de
        realizar el cierre, el sistema verifica que no existan comprobantes sin
        finalizar del mes de proceso.
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_menu_consolidacion_.jpg"
        width={600}
        height={300}
      />
      <h1>A continuación el detalle de las opciones de este módulo:</h1>
      <List items={data} />
    </div>
  );
};

export default page;
