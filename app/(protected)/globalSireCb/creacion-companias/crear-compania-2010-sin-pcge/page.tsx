import TablaDocumentosRelacionados from "@/components/TablaDocumentosRelacionados";
import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "¿Se pueden crear ejercicios anteriores en la misma compañía?",
      description:
        "¿Es posible crear ejercicios anteriores al ejercicio actual? Por ejemplo, tengo el 2014 y deseo crear el 2013.",
      href: "/globalSireCb/creacion-companias/crear-ejercicios-antiguos",
    },
    {
      id: 2,
      title:
        "Caso 1: Crear compañía del 2010 con el PCGE que viene por defecto en el sistema.",
      description:
        "Cómo crear una compañía del 2010 con el PCGE que viene por defecto en el sistema.",
      href: "/globalSireCb/creacion-companias/crear-compania-2010-pcge-defecto",
    },
    {
      id: 3,
      title:
        "Caso 2: Crear compañía del 2010 copiando el PCGE previamente configurado en otra compañía, en el ejercicio 2010.",
      description:
        "Cómo crear una compañía del 2010 copiando el PCGE previamente configurado en otra compañía, en el ejercicio 2010 o anterior.",
      href: "/globalSireCb/creacion-companias/crear-compania-2010-copiando-pcge",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso 3:</h1>
      <p>
        Cómo crear una compañía del 2010 sin tener ninguna compañía con el PCGE
        en el 2010 o anterior.
      </p>
      <h1 className="font-bold">Solución:</h1>
      <p>
        Para darle pronta solución deberá comunicarse con el área de Consultoría
        a través de nuestra central 203-8300.
      </p>
      <p>Asimismo, le recomendamos leer los documentos relacionados.</p>
      <TablaDocumentosRelacionados />
    </div>
  );
};

export default page;
