import TablaDocumentosRelacionados from "@/components/TablaDocumentosRelacionados";
import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "¿Cómo cargar los rubros del Estado de Flujo de Efectivo? - Incluye Video",
      description:
        "Para poder trabajar un reporte de Flujo de Efectivo, deberá validar que cuenta con sus rubros",
      href: "/globalSireCb/estados-financieros/rubros-flujo-efectivo",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Descripción del problema</h1>
      <p>
        Al emitir el reporte de Flujo de Efectivo, el sistema muestra el mensaje
        Error {"9"} en tiempo de ejecución: El subíndice está fuera del
        intervalo.
      </p>
      <Image
        alt="Error 9 tiempo de ejecución"
        src="https://miconcar.com/uploads/documentos/ERROR_9_FLUJO.JPG"
        width={550}
        height={550}
      />
      <h1 className="font-bold">Solución al problema</h1>
      <p>
        Cargar al CONCAR de los rubros del Estado de Flujo de Efectivo. En
        Documentos Relacionados, más bajo, se incluye forma de carga.{" "}
      </p>
      <TablaDocumentosRelacionados items={data} />
    </div>
  );
};

export default page;
