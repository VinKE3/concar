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
      <p>
        Utilizar cuando se necesiten agregar documentos omitidos en períodos
        anteriores o para corregir documentos mal ingresados.{" "}
      </p>
      <div className="flex items-center justify-start gap-2">
        <Image
          alt="Que contiene la Tabla General"
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_modificar_1.jpg"
          width={35}
          height={35}
        />
        <p>MODIFICAR (Alt-M) </p>
      </div>
      <p>
        Utilizar cuando se desea modificar un documento previamente ingresado en
        esta ventana.{" "}
      </p>
      <div className="flex items-center justify-start gap-2">
        <Image
          alt="Que contiene la Tabla General"
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_consultar_1.jpg"
          width={35}
          height={35}
        />
        <p>CONSULTAR (Alt-T) </p>
      </div>
      <p>
        Utilizar cuando se desee consultar los documentos previamente ingresados
        en esta ventana.{" "}
      </p>
      <div className="flex items-center justify-start gap-2">
        <Image
          alt="Que contiene la Tabla General"
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_eliminar_1.jpg"
          width={35}
          height={35}
        />
        <p>ELIMINAR (Alt-E) </p>
      </div>
      <p>
        Utilizar cuando se desee eliminar comprobantes previamente ingresados en
        esta ventana.{" "}
      </p>
      <div className="flex items-center justify-start gap-2">
        <Image
          alt="Que contiene la Tabla General"
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_buscar_1.jpg"
          width={35}
          height={35}
        />
        <p>MODIFICAR (Alt-M) </p>
      </div>
      <p>
        Utilizar cuando se desee buscar un registro entre varios comprobantes
        previamente ingresados en esta ventana.{" "}
      </p>
      <div className="flex items-center justify-start gap-2">
        <p>Al presionar</p>
        <Image
          alt="Que contiene la Tabla General"
          src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_libros_electronicos_2_.jpg"
          width={150}
          height={150}
        />
        <p>el sistema mostrará la siguiente pantalla: </p>
      </div>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_libros_electronicos_42_1.jpg"
        width={550}
        height={550}
      />
      <p>Ingresar: </p>
      <p>
        PERÍODO DECLARACIÓN PLE: El sistema lo genera de forma automática. Es el
        período de declaración en el cual se va a regularizar las omisiones y/o
        rectificaciones. El mes lo toma del mes indicado en la ventana anterior.{" "}
      </p>
      <p>
        TIPO DOCUMENTO: Seleccionar el tipo del documento que se desea
        regularizar por haber sido omitido o que se requiere corregir.{" "}
      </p>
      <p>
        SERIE DOCUMENTO: Seleccionar la serie del documento que se desea
        regularizar por haber sido omitido o que se requiere corregir.{" "}
      </p>
      <p>
        NÚMERO DOCUMENTO: Registrar el número del documento que se desea
        regularizar por haber sido omitido o que se requiere corregir. En caso
        se opte por anotar el importe total de las operaciones realizadas
        diariamente por tickets que no dan derecho a crédito fiscal emitidos,
        registrar el número inicial.{" "}
      </p>
      <p>
        NÚMERO FINAL: En caso se opte por anotar el importe total de las
        operaciones realizadas diariamente por tickets que no dan derecho a
        crédito fiscal emitidos, registrar el número final.
      </p>
      <p>
        FECHA DOCUMENTO: La fecha del documento que se desea rectificar o aquel
        que se ha omitido.{" "}
      </p>
      <p>
        Importante: Debe ser menor al período de declaración PLE, caso
        contrario, se emitirá el siguiente mensaje:{" "}
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_libros_electronicos_4_.jpg"
        width={550}
        height={550}
      />
      <p>
        FECHA VENCIMIENTO: La fecha de vencimiento del documento que se desea
        rectificar o aquel que se ha omitido. Importante: La fecha ingresada
        debe ser menor al período de declaración del PLE.{" "}
      </p>
      <p>
        PERÍODO A RECTIFICAR: El sistema lo determina de manera automática
        cuando se ha ingresado la fecha de documento.{" "}
      </p>
      <p>
        CORRELATIVO (SUBDIARIO-COMPROB-SEC): Desplegar el menú y seleccionar
        entre el subdiario 05 o 06.{" "}
      </p>
      <p>
        Lo que se recomienda para el ingreso del correlativo, es seguir la
        estructura siguiente. Por ejemplo:{" "}
      </p>
      <div>
        <p>05-010001 </p>
        <p>05: Subdiario Ventas </p>
        <p>01: Mes de Enero </p>
        <p>
          0001: Correlativo de la operación original que está modificando en
          caso de corrección (Estado 9) o siguiente que le toca en el caso de
          omisión (Estado 8).
        </p>
      </div>
      <p>
        SECUENCIA: En la primera parte por defecto el sistema le coloca M de
        Movimiento. En el segundo recuadro colocar el número de secuencia del
        registro original en caso se haya generado en la versión 4.0.0 o
        posterior, caso contrario, colocar un número cualquiera. Este dato es
        obligatorio.
      </p>
      <p>
        TIPO DOCUMENTO IDENTIDAD: Desplegar el menú y seleccionar el tipo de
        documento del cliente.{" "}
      </p>
      <p>RAZÓN SOCIAL: Ingresar la razón social o nombre del cliente </p>
      <p>
        MONEDA DECLARACIÓN: Unidad monetaria en que lleva la contabilidad la
        empresa.{" "}
      </p>
      <p>
        ISC: Monto del ISC del comprobante omitido o por rectificar en caso
        aplicara.{" "}
      </p>
      <p>
        VALOR EXPORTACIÓN: Monto del valor exportación del comprobante omitido o
        por rectificar{" "}
      </p>
      <p>IGV: Monto del IGV del comprobante omitido o por regularizar.</p>
      <p>
        BASE IMPONIBLE: Monto de la base imponible del comprobante omitido o por
        rectificar.{" "}
      </p>
      <p>
        OTROS TRIBUTOS: Otros tributos y cargos que no formar parte de la base
        imponible del documento omitido o por rectificar.
      </p>
      <p>
        EXONERADO: Monto exonerado del comprobante omitido o por rectificar.{" "}
      </p>
      <p>INAFECTO: Monto inafecto del comprobante omitido o por rectificar.</p>
      <p>
        TOTAL IMPORTE: El sistema realiza el cálculo de manera automática con
        los datos ingresados anteriormente.
      </p>
      <p>
        TIPO CAMBIO: El sistema lo toma el tipo de cambio Venta del
        Mantenimiento Tipo de cambio de la fecha del documento en caso esté
        registrado, caso contrario, deberá digitarse.
      </p>
      <p>
        FECHA DOCUMENTO REFERENCIA: Ingresar la fecha del documento de
        referencia en caso el tipo de documento sea una Nota de Crédito o
        Débito. En ese caso es un dato obligatorio.
      </p>
      <p>
        TIPO DOCUMENTO REFERENCIA: Ingresar el tipo del documento de referencia
        en caso el tipo de documento sea una Nota de Crédito o Débito. En ese
        caso es un dato obligatorio.
      </p>
      <p>
        SERIE DOCUMENTO REFERENCIA: Ingresar la serie del documento de
        referencia en caso el tipo de documento sea una Nota de Crédito o
        Débito. En ese caso es un dato obligatorio.
      </p>
      <p>
        NÚMERO DOCUMENTO REFERENCIA: Ingresar el número del documento de
        referencia en caso el tipo de documento sea una Nota de Crédito o
        Débito. En ese caso es un dato obligatorio.{" "}
      </p>
      <p>
        ESTADO: Desplegar el menú y seleccionar entre: 8: Omisión o 9:
        Corrección
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_libros_electronicos_41_1.jpg"
        width={550}
        height={550}
      />
      <div className="flex items-center justify-start gap-2">
        <p>Presionar el botón</p>
        <Image
          alt="Que contiene la Tabla General"
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_guardar_1.jpg"
          width={35}
          height={35}
        />
      </div>
      <p>
        <p>el sistema mostrará la siguiente pantalla: </p>
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concarcb_libroselectronicos91.jpg"
        width={550}
        height={550}
      />
      <div className="flex items-center justify-start gap-2">
        <p>Al presionar</p>
        <Image
          alt="Que contiene la Tabla General"
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_modificar_1.jpg"
          width={35}
          height={35}
        />
      </div>
      <p>
        y ubicarse sobre la fila correspondiente, el sistema modificará un
        documento de ventas registrado. Posteriormente
      </p>
      <div className="flex items-center justify-start gap-2">
        <p>dar clic en el botón </p>
        <Image
          alt="Que contiene la Tabla General"
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_guardar_1.jpg"
          width={35}
          height={35}
        />
      </div>
      <p> al salir se reflejará los cambios en la pantalla principal.</p>
      <div className="flex items-center justify-start gap-2">
        <p>Al presionar</p>
        <Image
          alt="Que contiene la Tabla General"
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_consultar_1.jpg"
          width={35}
          height={35}
        />
      </div>
      <p>
        y ubicarse sobre la fila correspondiente, el sistema mostrará el
        formulario con los datos del documento de Ventas DESACTIVADO.
      </p>
      <p>
        Para eliminar un registro, deberá ubicarse sobre el documento de ventas
        y
      </p>
      <div className="flex items-center justify-start gap-2">
        <p>dar clic en el botón</p>
        <Image
          alt="Que contiene la Tabla General"
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_eliminar_1.jpg"
          width={35}
          height={35}
        />
        <p>.</p>
      </div>
      <div className="flex items-center justify-start gap-2">
        <p>En el mensaje que emite el sistema, seleccionar </p>
        <Image
          alt="Que contiene la Tabla General"
          src="https://miconcar.com/uploads/documentos/concar_cb_c5_1_comprobantes_estandar_si_1.jpg"
          width={65}
          height={65}
        />
      </div>
      <p> para eliminar el documento</p>
      <div className="flex items-center justify-start gap-2">
        <p>en caso contrario </p>
        <Image
          alt="Que contiene la Tabla General"
          src="https://miconcar.com/uploads/documentos/concar_cb_c5_1_comprobantes_estandar_no_1.jpg"
          width={65}
          height={65}
        />
      </div>
      <p>
        y el sistema ignorará el proceso. Al eliminar el documento, el
        formulario principal se actualizará.
      </p>
      <h1 className="font-bold">
        7.6.5.2 Crea archivo 14.1 Registro de ventas para PLE
      </h1>
      <p>
        Esta opción genera archivos en formato de texto o en Excel. Previamente
        se deberá Generar el Archivo Mensual Ventas.
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_libros_electronicos_39_1.jpg"
        width={500}
        height={500}
      />
      <p>En esta pantalla se podrá:</p>
      <div className="flex items-center justify-start gap-2">
        <Image
          alt="Que contiene la Tabla General"
          src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_libros_electronicos_3_1.jpg"
          width={100}
          height={100}
        />
        <p>o Alt-T</p>
      </div>
      <div className="flex items-center justify-start gap-2">
        <Image
          alt="Que contiene la Tabla General"
          src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_libros_electronicos_4_1.jpg"
          width={100}
          height={100}
        />
        <p>o Alt-X</p>
      </div>
      <div className="flex items-center justify-start gap-2">
        <p>Al presionar el botón</p>
        <Image
          alt="Que contiene la Tabla General"
          src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_libros_electronicos_5_.jpg"
          width={100}
          height={100}
        />
        <p>el sistema generará la siguiente pantalla:</p>
      </div>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_libros_electronicos_6_.jpg"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start gap-2">
        <p>Presionar </p>
        <Image
          alt="Que contiene la Tabla General"
          src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_libros_electronicos_7_.jpg"
          width={100}
          height={100}
        />
        <p>.</p>
      </div>
      <p>
        El archivo de texto del Registro de Ventas a cargar al Programa de
        Libros Electrónicos (PLE) de la SUNAT se generará en ruta especificada.
        Opcionalmente, se puede abrir el archivo de Ventas PLE y se observará el
        registro realizado.
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_libros_electronicos_38_1.jpg"
        width={500}
        height={100}
      />
      <p>
        Si hubiera alguna inconsistencia saldrá una pantalla similar a la que
        salió en el Registro de Compras. Como se muestra en la pantalla
        inferior:
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_libros_electronicos_9_.jpg"
        width={1000}
        height={1000}
      />
      <div className="flex items-center justify-start gap-2">
        <p>Presionar el botón </p>
        <Image
          alt="Que contiene la Tabla General"
          src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_libros_electronicos_10_.jpg"
          width={100}
          height={100}
        />
        <p>y el sistema generará la siguiente pantalla:</p>
      </div>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_libros_electronicos_11_.jpg"
        width={1000}
        height={1000}
      />
      <p>
        Este archivo Excel contiene una fiel copia de los registros que se
        informarán en el PLE mediante el archivo de texto.
      </p>
      <h1 className="font-bold">
        7.6.5.3 Formato Comprobación Registro Ventas con Documentos Adicionales
        PLE
      </h1>
      <p>
        Esta opción sirve para emitir un Registro de Ventas del período
        seleccionado que incluye los documentos adicionales (Comprobantes
        omitidos y/o regularizados) ingresados.
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_c7_4_registro_ventas_44_.jpg"
        width={550}
        height={550}
      />
      <p>Ingresar:</p>
      <p>
        MES REGISTRO VENTAS: Ingresar el mes del Registro de Ventas con
        adicionales a generar
      </p>
      <p>MONEDA: Desplegar el menú y seleccionar la unidad monetaria</p>
      <p>
        TOTAL POR FECHA DMTO: Activar este casillero con check, si se desea
        emitir el reporte por fechas de los documentos.
      </p>
      <p>
        IMPRIMIR RESUMEN POR SUBDIARIO: Activar este casillero con check, si se
        desea enviar a pantalla el resumen por subdiario.
      </p>
      <p>
        IMPRIMIR NOMBRE EXTENDIDO POR COMPAÑÍA: Activar este casillero con
        check, si se desea que el reporte incluya el nombre completo de la
        empresa.
      </p>
      <p>
        ORDEN: Elegir entre las 4 opciones de ordenamiento para la emisión del
        reporte
      </p>
      <p>OPCIONES DE IMPRESIÓN:</p>
      <div className="flex items-center justify-start gap-2">
        <Image
          alt="Que contiene la Tabla General"
          src="https://miconcar.com/uploads/documentos/concar_cb_c7__reportes_5.jpg"
          width={35}
          height={35}
        />
        <p>IMPRIMIR (Alt-I)</p>
      </div>
      <div className="flex items-center justify-start gap-2">
        <Image
          alt="Que contiene la Tabla General"
          src="https://miconcar.com/uploads/documentos/concar_cb_c7__reportes_1_3.jpg"
          width={35}
          height={35}
        />
        <p>VER REPORTE EN PANTALLA (Alt-P)</p>
      </div>
      <div className="flex items-center justify-start gap-2">
        <Image
          alt="Que contiene la Tabla General"
          src="https://miconcar.com/uploads/documentos/concar_cb_c7__reportes_2_4.jpg"
          width={35}
          height={35}
        />
        <p>GUARDAR COMO TEXTO (Alt-G)</p>
      </div>
      <div className="flex items-center justify-start gap-2">
        <Image
          alt="Que contiene la Tabla General"
          src="https://miconcar.com/uploads/documentos/concar_cb_c7__reportes_3_4.jpg"
          width={35}
          height={35}
        />
        <p>GENERA HOJA DE CÁLCULO (Alt-E)</p>
      </div>
      <div className="flex items-center justify-start gap-2">
        <p>Presionar el botón</p>
        <Image
          alt="Que contiene la Tabla General"
          src="https://miconcar.com/uploads/documentos/concar_cb_c7__reportes_1_3.jpg"
          width={35}
          height={35}
        />
      </div>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_c7_4_registro_ventas_45_.jpg"
        width={1000}
        height={1000}
      />
      <p>Adicionalmente, el sistema muestra el record de comprobantes:</p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_c7_4_registro_ventas_46_.jpg"
        width={600}
        height={600}
      />
      <p>
        Nota: El período y la fecha de emisión del comprobante deben pertenecer
        al mismo mes.
      </p>
    </div>
  );
};

export default page;
