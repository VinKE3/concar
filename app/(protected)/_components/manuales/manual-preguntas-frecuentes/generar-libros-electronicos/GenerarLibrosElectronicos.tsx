import Image from "next/image";
import React from "react";

const GenerarLibrosElectronicos = () => {
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Descripción del problema</h1>
      <p>
        Procedimiento para poder realizar el proceso de generación de los libros
        electrónicos de Compras, Ventas, Diario. Diario de Formato Simplificado
        y Mayor para SUNAT en el sistema CONCAR®
      </p>
      <h1 className="font-bold">Solución al problema</h1>
      <h1 className="font-bold">NORMATIVIDAD</h1>
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
      <h1 className="font-bold">LIBRO ELECTRÓNICO DE REGISTRO DE VENTAS</h1>
      <h2 className="font-bold">
        Reportes/ Libros y Registros Oficiales/ Registro de Ventas/ Libros
        Electrónicos
      </h2>
      <p>
        En esta opción se ubican el registro de documentos adicionales por
        correcciones y omisiones, la generación del archivo de texto para carga
        al PLE del Registro de Ventas y un reporte de comprobación de Registro
        de Ventas con Documentos Adicionales.
      </p>
      <p>Estados en que se generan los comprobantes:</p>
      <ul className="px-5 list-disc">
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
        MANTENIMIENTO ARCHIVO REGISTRO VENTAS PLE ADICIONALES
      </h1>
      <p>
        En este menú se registrarán los comprobantes de ventas que hayan sido
        omitidos y/o registrados equivocadamente en períodos anteriores y que se
        desean regularizar en el mes en curso para efectos programa de Libros
        Electrónicos (PLE) de la SUNAT.
      </p>
      <p>CONSIDERACIONES ADICIONALES:</p>
      <ul className="px-5 list-disc">
        <li>
          Para el caso de CORRECCIONES (Estado 9): Cuando se registra una
          modificación de una operación de un mes ya informado debe consignarse
          el correlativo (número de comprobante) de la operación original.
        </li>
        <li>
          Para el caso de OMISIONES (Estado 8): Cuando se registra una operación
          omitida en un mes anterior, debe consignarse el correlativo (número de
          comprobante) que continúa con la serie.
        </li>
      </ul>
      <p>Ejemplo:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_6_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={600}
        height={500}
      />
      <p>
        Al hacer clic en la opción Mantenimiento Archivo Registro de Ventas e
        Ingresos Adicionales, el sistema mostrará la siguiente pantalla. El
        sistema cuenta con 2 opciones: el PLE 4.0 y el 5.0. Se muestra como
        ejemplo en la pantalla el PLE4.0:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concarsql_libroselectronicos14.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={600}
        height={500}
      />
      <p>
        Inicialmente se debe indicar el Mes de Registro de Ventas en el cual se
        quiere registrar los Documentos Adicionales por omisiones o
        correcciones.
      </p>
      <p>En esta opción se podrá:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_libros_electronicos_2_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={200}
        height={100}
      />
      <p>
        Utilizar cuando se necesiten agregar documentos omitidos en períodos
        anteriores o para corregir documentos mal ingresados.
      </p>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_modificar_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
        <h1>MODIFICAR (Alt-M)</h1>
      </div>
      <p>
        Utilizar cuando se desea modificar un documento previamente ingresado en
        esta ventana.
      </p>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_consultar_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
        <h1> CONSULTAR (Alt-T)</h1>
      </div>
      <p>
        Utilizar cuando se desee consultar los documentos previamente ingresados
        en esta ventana.
      </p>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_eliminar_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
        <h1>ELIMINAR (Alt-E)</h1>
      </div>
      <p>
        Utilizar cuando se desee eliminar comprobantes previamente ingresados en
        esta ventana.
      </p>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_buscar_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
        <h1>BUSCAR (Alt-B)</h1>
      </div>
      <p>
        Utilizar cuando se desee buscar un registro entre varios comprobantes
        previamente ingresados en esta ventana.
      </p>
      <div className="flex items-center justify-start">
        <h1>Presionar</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_libros_electronicos_2_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={200}
          height={100}
        />
      </div>
      <p>y el sistema generará la siguiente pantalla:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_7_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
    </div>
  );
};

export default GenerarLibrosElectronicos;
