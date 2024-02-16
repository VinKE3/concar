import Table from "@/components/Table";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "¿Se pueden crear ejercicios anteriores en la misma compañía?",
      href: "https://miconcar.com/uploads/documentos/784_CONCAR_CB_Se_pueden_crear_ejercicios_anteriores_en_la_misma_compa%C3%B1ia.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso:</h1>
      <p>Se debe precisar que el CONCAR® viene con dos empresas modelo:</p>
      <ul className="list-disc px-5">
        <li>
          0001 EMPRESA DEMO S.A., solo con el ejercicio 2010, cuenta con el
          modelo del Plan Contable General Revisado
        </li>
        <li>
          0002 EMPRESA PCGE 2011, con los ejercicios 2010 y 2011, cuenta con el
          modelo del Plan Contable General Empresarial (PCGE) para ambos
          ejercicios.
        </li>
        <p>
          Es posible que los usuarios después de haber restaurado un backup o
          según la instalación que hayan realizado, no visualicen ninguna de las
          dos compañías. Por ello, es importante señalar los siguientes casos
          que se pueden presentar:{" "}
        </p>
        <li>
          Caso 1: Crear compañía del 2010 con el PCGE que viene por defecto en
          el sistema.
        </li>
        <li>
          Caso 2: Crear compañía del 2010 copiando el PCGE previamente
          configurado en otra compañía, en el ejercicio 2010 o anterior.
        </li>
        <li>
          Caso 3: Crear compañía del 2010 sin tener ninguna compañía con el PCGE
          en el 2010 o anterior.
        </li>
      </ul>
      <h1 className="font-bold">Solución</h1>
      <ul className="list-disc px-5">
        <li>
          <Link href="/globalSireCb/creacion-companias/crear-compania-2010-pcge-defecto">
            Caso 1: Crear compañía del 2010 con el PCGE que viene por defecto en
            el sistema.
          </Link>
        </li>
        <li>
          <Link href="/globalSireCb/creacion-companias/crear-compania-2010-pcge-defecto">
            Caso 2: Crear compañía del 2010 copiando el PCGE previamente
            configurado en otra compañía, en el ejercicio 2010.
          </Link>
        </li>
        <li>
          <Link href="/globalSireCb/creacion-companias/crear-compania-2010-pcge-defecto">
            Caso 3: Crear compañía del 2010 sin tener ninguna compañía con el
            PCGE en el 2010.
          </Link>
        </li>
      </ul>
      <Table items={data} />
    </div>
  );
};

export default page;
