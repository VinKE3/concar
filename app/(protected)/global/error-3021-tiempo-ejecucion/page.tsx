import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Como solucionar el mensaje error 3021 en tiempo de ejecución al generar archivo mensual de compras",
      href: "https://miconcar.com/uploads/documentos/1126_Cod.1126_D01113_como_solucionar_el_mensaje_Error_3021_en_tiempo_de_ejecuci%C3%B3n_al_generar_archivo_mensual_de_compras.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <Image
        alt="superar-mensaje-error-06"
        src="/error3021.png"
        width={200}
        height={200}
      />
      <p>TEMA: ¿Cómo contabilizar Compras No Domiciliadas de Bienes?</p>
      <Table items={data} />
    </div>
  );
};

export default page;
