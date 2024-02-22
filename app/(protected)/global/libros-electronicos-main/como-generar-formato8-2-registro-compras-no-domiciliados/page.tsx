import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Manual PLE CONCAR SQL",
      href: "https://miconcar.com/uploads/documentos/988_Manual_PLE_5_0_CONCAR_SQL(2)1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Contenido:</h1>
      <p>
        La nueva versión 5.0 del PLE de SUNAT solicita información de compras a
        no domiciliados con su propio formato. Debido a éste cambio, a partir de
        la versión 13.33 el CONCAR® SQL se cuenta con las siguientes opciones de
        interfaz con el PLE:
      </p>
      <ul className="px-5 list-disc">
        <li>
          Formato 8.1 Registro de Compras electrónico (Para las versiones 4.0 y
          5.0 PLE)
        </li>
        <li>
          Formato 14.1 Registro de Ventas electrónico (Para las versiones 4.0 y
          5.0 PLE)
        </li>
        <li>Formato 5.1 Libro Diario (Para las versiones 4.0 y 5.0 PLE)</li>
        <li>
          {" "}
          Formato 5.2 Libro Diario Simplificado (Para las versiones 4.0 y 5.0
          PLE)
        </li>
        <li>
          Formato 5.3 Información del Plan Contable (Para las versiones 4.0 y
          5.0 PLE)
        </li>
        <li>
          Formato 5.4 Información del Plan Contable Simplificado (Para las
          versiones 4.0 y 5.0 PLE)
        </li>
        <li>Formato 6.1 Libro Mayor (Para las versiones 4.0 y 5.0 PLE).</li>
      </ul>
      <p>
        Para ver instructivo de las opciones antes mencionadas, ir a Cómo
        generar los libros electrónicos de Registro de Compras y Ventas.
      </p>
      <p>
        Adicionalmente, se ha incrementado la opción de la generación del nuevo
        Formato 8.2 – Registro de compras de No Domiciliados. Tanto para compras
        de Bienes como de Servicios en el extranjero.
      </p>
      <p>
        Para ver el instructivo para ésta nueva opción vaya al documento adjunto
        Cómo generar Formato 8.2 Registro de Compras a No Domiciliados PLE 5.0.
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
