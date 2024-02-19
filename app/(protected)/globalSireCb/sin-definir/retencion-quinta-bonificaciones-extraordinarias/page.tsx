import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "El sistema permite realizar la retención de quinta a bonificaciones extraordinarias, en el cual el sistema solo calcula la retención de quinta en su totalidad en el mes de proceso.",
      href: "https://miconcar.com/uploads/documentos/999_Placar_CB_Retencion_de_quinta_a_bonificaciones_extraordinarias.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        El sistema permite realizar la retención de quinta a bonificaciones
        extraordinarias.Lo que realiza el sistema es calcular la retención de
        quinta en su totalidad solo en el mes de proceso.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
