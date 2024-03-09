import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Que contiene la Tabla General",
      href: "https://miconcar.com/uploads/documentos/1062_Cod.1062_D01049_que_contiene_la_tabla_general.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Libros electrónicos</h1>
      <p>
        Según la Resolución 248-2012-SUNAT (26.10.12) se dispuso que desde el 01
        de enero de 2013, están obligados a llevar libros y/o registros
        electrónicos los designados como Principales Contribuyentes (PRICOS).
      </p>
      <p>
        Con fecha 14.01.2013, la SUNAT dispuso que los PRICOS NUEVOS,
        incorporados desde Enero de 2013, están obligados a llevar libros
        electrónicos desde el 01 de Marzo de 2013 y los PRICOS ANTIGUOS están
        obligados a llevar dichos registros desde el 01 de Enero de 2013.
      </p>
      <p>
        Posteriormente la Resolución 379-2013-SUNAT (29.12.13) dispuso que los
        contribuyentes que hayan obtenido ingresos mayores a 500 UIT, entre los
        meses de julio de 2012 a junio de 2013, desde el periodo enero 2014
        tienen la obligación de llevar de manera electrónica el Registro de
        Ventas e Ingresos y el Registro de Compras, a partir del 1 de enero del
        2014.
      </p>
      <p>Estados en que se generan los comprobantes:</p>
      <ul className="list-disc px-5">
        <li>
          ESTADO 1: Para aquellos comprobantes con fecha de emisión del mes que
          se está generando.
        </li>
        <li>
          ESTADO 2: Para aquellos comprobantes con fecha de emisión del mes que
          se está generando pero que están ANULADOS.
        </li>
        <li>
          ESTADO 8: Cuando se registra una operación omitida en un mes ya
          informado.
        </li>
        <li>
          ESTADO 9: Cuando se registra una modificación de una operación de un
          mes ya informado, debe consignarse el correlativo y secuencia de la
          operación original.
        </li>
      </ul>
      <h1 className="font-bold">
        7.6.5.1 Mantenimiento Archivo Registro Ventas PLE Adicionales
      </h1>
      <p>
        En este menú se registrarán los comprobantes de ventas que hayan sido
        omitidos y/o registrados equivocadamente en períodos anteriores y que se
        desean regularizar en el mes en curso para efectos programa de Libros
        Electrónicos (PLE) de la SUNAT.{" "}
      </p>
      <h1>CONSIDERACIONES ADICIONALES: </h1>
      <p>
        Para el caso de CORRECCIONES (Estado 9): Cuando se registra una
        modificación de una operación de un mes ya informado debe consignarse el
        correlativo (número de comprobante) de la operación original.{" "}
      </p>
      <p>
        Para el caso de OMISIONES (Estado 8): Cuando se registra una operación
        omitida en un mes anterior, debe consignarse el correlativo (número de
        comprobante) que continúa con la serie.{" "}
      </p>
      <p>Ejemplo:</p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_libros_electronicos_44_1.jpg"
        width={650}
        height={650}
      />
      <p>
        Al hacer clic en la opción Mantenimiento archivo Registro de Ventas e
        Ingresos Adicionales, el sistema muestra 2 opciones: el PLE 4.0 y el
        5.0. Se muestra como ejemplo en la pantalla el PLE 4.0:
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concarcb_libroselectronicos83.jpg"
        width={650}
        height={650}
      />
      <p>
        Inicialmente se debe indicar el Mes de Registro de Ventas en el cual se
        quiere registrar los Documentos Adicionales por omisiones o
        correcciones.{" "}
      </p>
      <p>En esta opción se podrá:</p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_libros_electronicos_2_.jpg"
        width={100}
        height={100}
      />
    </div>
  );
};

export default page;
