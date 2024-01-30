import Heading from "@/components/Heading";
import Table from "@/components/Table";
import React from "react";

const ErroresDetectadosLibroCompras = () => {
  const data = [
    {
      id: 1,
      title:
        "Validación de Libro Electrónico de Compras - Número de documento no debe estar en blanco o en cero",
      href: "https://miconcar.com/uploads/documentos/858_CONCAR_CB_Validacion_de_libro_electronico_de_ventas_numero_de_documento_debe_ser_numerico_mayor_a_cero.pdf",
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

export default ErroresDetectadosLibroCompras;
