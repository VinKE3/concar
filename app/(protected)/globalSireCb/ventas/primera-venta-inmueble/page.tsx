import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Primera Venta de Inmueble.",
      href: "https://miconcar.com/uploads/documentos/805_INTRUCTIVO_MICONCAR_-_PRIMERA_VENTA_DE_INMUEBLE1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        El presente documento contiene el proceso que se debe realizar en
        CONCAR® para registrar la primera venta de un inmueble, considerando el
        cálculo del importe afecto para la generación del IGV respectivo y la
        correcta presentación en el Registro de Ventas.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
