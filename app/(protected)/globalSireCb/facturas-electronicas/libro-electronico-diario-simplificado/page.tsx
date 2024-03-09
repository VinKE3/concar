import Table from "@/components/Table";
import Image from "next/image";
import React from "react";
import Link from "next/link";

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
      <div>
        <Link
          className="text-cyan-700 hover:text-cyan-800 hover:underline"
          href="/globalSireCb/facturas-electronicas/generacion-de-los-libros-electronicos-diario"
        >
          I. Generación de los Libros Electrónicos Diario, Diario Simplificado y
          Mayor
        </Link>
        <ul className="list-decimal px-5">
          <li>
            <Link
              className="text-cyan-500 hover:text-cyan-600 hover:underline"
              href="/globalSireCb/facturas-electronicas/generacion-libro-diario-simplificado"
            >
              Cómo Generar los Libros Electrónicos Diario, Diario Simplificado y
              Mayor.
            </Link>
          </li>
          <li>
            <Link
              className="text-cyan-500 hover:text-cyan-600 hover:underline"
              href="/globalSireCb/facturas-electronicas/registro-omisiones-libro-diario-simplificado"
            >
              Registro de Omisiones en los Libros Electrónicos Diario, Diario
              Simplificado y Mayor.
            </Link>
          </li>
        </ul>
      </div>

      <div>
        {" "}
        <Link
          className="text-cyan-700 hover:text-cyan-800 hover:underline"
          href="/globalSireCb/facturas-electronicas/carga-libro-diario-simplificado"
        >
          II. Carga de los Libros Electrónicos Diario, Diario Simplificado y
          Mayor al PLE-SUNAT
        </Link>
        <ul className="list-decimal px-5">
          <li>
            <Link
              className="text-cyan-500 hover:text-cyan-600 hover:underline"
              href="/globalSireCb/facturas-electronicas/como-cargar-libro-diario"
            >
              Cómo Cargar los Libros Electrónicos Diario, Diario Simplificado y
              Mayor al PLE-SUNAT.
            </Link>
          </li>
          <li>
            <Link
              className="text-cyan-500 hover:text-cyan-600 hover:underline"
              href="/globalSireCb/facturas-electronicas/como-subsanar-inconsistencias"
            >
              Cómo subsanar inconsistencias en el PLE-SUNAT.
            </Link>
          </li>
        </ul>
      </div>

      <div>
        {" "}
        <Link
          className="text-cyan-700 hover:text-cyan-800 hover:underline"
          href="/globalSireCb/facturas-electronicas/validacion-libro-diario-simplificado"
        >
          III. Validación en PLE-SUNAT de los libros electrónicos Diario, Diario
          Simplificado y Mayor
        </Link>
        <ul className="list-decimal px-5">
          <li>
            <Link
              className="text-cyan-500 hover:text-cyan-600 hover:underline"
              href="/globalSireCb/facturas-electronicas/campo-obligatorio-llave-incorrecta"
            >
              Validación en PLE-SUNAT: Campo obligatorio / La llave única es
              incorrecta.
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
