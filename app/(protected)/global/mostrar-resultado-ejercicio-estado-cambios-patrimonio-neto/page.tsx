import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Mostrar Resultado del ejercicio en Estado de Cambios en el Patrimonio Neto.",
      href: "https://miconcar.com/uploads/documentos/809_INSTRUCTIVO_MICONCAR_-_RESULTADO_DEL_EJERCICIO_EN_ESTADO_DE_CAMBIOS_EN_EL_PATRIMONIO_NETO.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Este instructivo le mostrará los pasos a seguir para reflejar el
        Resultado del Ejercicio en el Estado de cambios en el Patrimonio Neto
        sin necesidad de realizar todo el circuito de asientos de cierre del
        ejercicio.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
