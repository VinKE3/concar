import Heading from "@/components/Heading";
import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Errores detectados en el PLE-SUNAT al validar el libro electrónico de compras",
      href: "https://miconcar.com/uploads/documentos/879_CONCAR_CB_Errores_detectados_en_el_ple_sunat_al_validar_el]_libro_electronico_de_compras.pdf",
    },
  ];
  return (
    <>
      <p>
        El reporte de información inconsistente brinda un detalle de todos los
        errores detectados por el PLE-SUNAT durante la validación del libro
        electrónico, señalando la ubicación del error. Por ejemplo:
      </p>
      <Table items={data} />
    </>
  );
};

export default page;
