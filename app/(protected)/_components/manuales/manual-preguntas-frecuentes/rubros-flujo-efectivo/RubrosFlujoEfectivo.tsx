import TablaDocumentosRelacionados from "@/components/TablaDocumentosRelacionados";
import React from "react";

const RubrosFlujoEfectivo = () => {
  const data = [
    {
      id: 1,
      title: "Estado de Flujo de Efectivo",
      description:
        "El Estado de Flujo de Efectivo muestra el efecto de los cambios de efectivo y equivalentes de efectivo, en un tiempo determinado.",
      href: "/manuales/manual-usuario-concar/estado-flujo-efectivo",
    },
  ];
  return (
    <>
      <div className="space-y-2">
        <h1 className="font-bold">Descripción del problema</h1>
        <p>Cómo cargar los rubros del Estado de Flujo de Efectivo.</p>
      </div>
      <div className="space-y-2">
        <h1 className="font-bold">Solución al problema</h1>
        <p>
          Solicitar a Consultoría servicio de carga por vía remota de archivo
          con rubros del Estado de Flujo de Efectivo.
        </p>
        <p>
          Luego realizada la carga el usuario deberá configurar las áreas a cada
          rubro, tomar en cuenta el documento relacionado de más abajo Estado de
          Flujo de Efectivo.
        </p>
      </div>
      <TablaDocumentosRelacionados items={data} />
    </>
  );
};

export default RubrosFlujoEfectivo;
