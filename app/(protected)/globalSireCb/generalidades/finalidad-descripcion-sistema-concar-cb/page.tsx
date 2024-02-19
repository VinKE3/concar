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
        El Sistema Contable y Financiero CONCAR® CB ha sido desarrollado para
        ser utilizado por el área de Contabilidad, en la elaboración de los
        Libros contables, Balances y Estados Financieros, posibilitando de esta
        manera mejorar la oportunidad y confiabilidad de los resultados para la
        toma de decisiones por la Alta Dirección.
      </p>
      <p>
        La versión de nuestro Software CONCAR® CodeBase, trabaja con archivos
        XBASE (DBF) y está orientado a las pequeñas y medianas empresas,
        estudios contables. Puede trabajar de uno a cuatro o más usuarios en
        configuración mono usuario o redes.
      </p>
      <p>
        El software CONCAR® emite Estados Financieros, reportes de centros de
        costos, análisis de cuentas por anexos y documentos, presupuestos,
        conciliación bancaria, ratios y gráficos de estados financieros.
      </p>
      <p>
        El sistema le permite el análisis de la información financiera de manera
        oportuna para la toma de decisiones, otorgándole un alto grado de
        autonomía a los usuarios para adecuar el sistema a sus necesidades, ya
        que los parámetros son manejados por medio del plan de cuentas y tablas
        complementarias. Puede aplicarse a todo tipo de empresas: Industriales,
        agrícolas, comerciales, servicios, financieras, navieras, constructoras,
        mineras, ONG, instituciones educativas, exportadoras y en general todos
        los giros de negocios.
      </p>
      <p>
        CONCAR® también proporciona análisis de las cuentas por cobrar y pagar,
        presupuestos, ratios, gráficos, conciliaciones bancarias y PDT SUNAT.
      </p>
    </div>
  );
};

export default page;
