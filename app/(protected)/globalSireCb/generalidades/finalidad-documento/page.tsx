import Table from "@/components/Table";
import Image from "next/image";
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
      <p>
        El presente Manual tiene por finalidad servir como guia en la
        administracion y operacion del Modulo que trabaja integrado al CONCAR CB
        el e-CONCAR PRO.
      </p>
      <p>
        La metodologia aplicada esta orientada a brindar la informacion
        necesaria que permita una comprension adecuada de las distintas opciones
        del modulo tanto al personal especializado como al usuario final.
      </p>
      <p>
        Es de responsabilidad del usuario mantener actualizado el presente
        manual con los cambios que pudieran afectar al modulo, sea por cambios
        en la Legislacion vigente o por las Politicas de la empresa.
      </p>
    </div>
  );
};

export default page;
