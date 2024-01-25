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
      <p>Ingresar:</p>
      <p>
        PERÍODO DECLARACIÓN PLE: El sistema lo genera de forma automática. Es el
        período de declaración en el cual se va a regularizar las omisiones y/o
        rectificaciones. El mes lo toma del mes indicado en la ventana anterior.
      </p>
      <p>
        TIPO DOCUMENTO: Seleccionar el tipo del documento que se desea
        regularizar por haber sido omitido o que se requiere corregir.
      </p>
      <p>
        SERIE DOCUMENTO: Seleccionar la serie del documento que se desea
        regularizar por haber sido omitido o que se requiere corregir.
      </p>
      <p>
        NÚMERO DOCUMENTO: Registrar el número del documento que se desea
        regularizar por haber sido omitido o que se requiere corregir. En caso
        se opte por anotar el importe total de las operaciones realizadas
        diariamente por tickets que no dan derecho a crédito fiscal emitidos,
        registrar el número inicial.
      </p>
      <p>
        NÚMERO FINAL: En caso se opte por anotar el importe total de las
        operaciones realizadas diariamente por tickets que no dan derecho a
        crédito fiscal emitidos, registrar el número final.
      </p>
      <p>
        FECHA DOCUMENTO: La fecha del documento que se desea rectificar o aquel
        que se ha omitido
      </p>
      <p>
        Importante: Debe ser menor al período de declaración PLE, caso
        contrario, se emitirá el siguiente mensaje:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_3_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        FECHA VENCIMIENTO: La fecha de vencimiento del documento que se desea
        rectificar o aquel que se ha omitido. Importante: La fecha ingresada
        debe ser menor al período de declaración del PLE.
      </p>
      <p>
        PERÍODO A RECTIFICAR: El sistema lo determina de manera automática
        cuando se ha ingresado la fecha de documento.
      </p>
      <p>
        CORRELATIVO (SUBDIARIO-COMPROB-SEC): Desplegar el menú y seleccionar
        entre el subdiario 05 o 06.
      </p>
      <p>
        Lo que se recomienda para el ingreso del correlativo, es seguir la
        estructura siguiente. Por ejemplo:
      </p>
      <div>
        <p>05-010001</p>
        <p>05: Subdiario Ventas</p>
        <p> 01: Mes de Enero</p>
        <p>
          {" "}
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
        documento del cliente.
      </p>
      <p>RAZÓN SOCIAL: Ingresar la razón social o nombre del cliente</p>
      <p>
        MONEDA DECLARACIÓN: Unidad monetaria en que lleva la contabilidad la
        empresa.
      </p>
      <p>
        ISC: Monto del ISC del comprobante omitido o por rectificar en caso
        aplicara.
      </p>
      <p>
        VALOR EXPORTACIÓN: Monto del valor exportación del comprobante omitido o
        por rectificar
      </p>
      <p>IGV: Monto del IGV del comprobante omitido o por regularizar.</p>
      <p>
        BASE IMPONIBLE: Monto de la base imponible del comprobante omitido o por
        rectificar.
      </p>
      <p>
        OTROS TRIBUTOS: Otros tributos y cargos que no formar parte de la base
        imponible del documento omitido o por rectificar.
      </p>
      <p>
        EXONERADO: Monto exonerado del comprobante omitido o por rectificar.
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
        Débito. En ese caso es un dato obligatorio
      </p>
      <p>
        NÚMERO DOCUMENTO REFERENCIA: Ingresar el número del documento de
        referencia en caso el tipo de documento sea una Nota de Crédito o
        Débito. En ese caso es un dato obligatorio.
      </p>
      <p>
        ESTADO: Desplegar el menú y seleccionar entre: 8: Omisión o 9:
        Corrección
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_8_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_cb_c10_5_tranfiere_pendientes_ano_anterior_2_7.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
      </div>
      <p>
        y el sistema mostrará la siguiente pantalla, con el formulario principal
        actualizado con el nuevo registro:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concarsql_libroselectronicos21.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start">
        <h1>Al presionar </h1>
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_modificar_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
      </div>
      <p>
        y ubicarse sobre la fila correspondiente, el sistema modificará un
        documento de ventas registrado:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_10_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start">
        <h1>Luego de realizar los cambios, dar clic en el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_cb_c10_5_tranfiere_pendientes_ano_anterior_2_7.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
      </div>
      <p>al salir se reflejará los cambios en la pantalla principal:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concarsql_libroselectronicos31.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start">
        <h1>Al presionar</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_consultar_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
      </div>
      <p>
        y ubicarse sobre la fila correspondiente, el sistema mostrará el
        formulario con los datos del documento de Ventas DESACTIVADO.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_12_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        Para eliminar un registro, deberá ubicarse sobre el documento de ventas
        y
      </p>
      <div className="flex items-center justify-start">
        <h1>dar clic en el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_eliminar_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
      </div>
      <Image
        src="https://miconcar.com/uploads/documentos/concarsql_libroselectronicos131.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start">
        <h1>En el mensaje, seleccionar </h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_cb_c5_1_comprobantes_estandar_si_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={100}
          height={100}
        />
      </div>
      <p>para eliminar el documento</p>
      <div className="flex items-center justify-start">
        <h1>en caso contrario</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_cb_c5_1_comprobantes_estandar_no_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={100}
          height={100}
        />
      </div>
      <p> y el sistema ignorará el proceso</p>
      <p>Al eliminar el documento, el formulario principal se actualizará.</p>
      <h1 className="font-bold">CREA ARCHIVO 14.1 REGISTRO VENTAS PARA PLE</h1>
      <p>
        Esta opción genera archivos en formato de texto o en Excel. Previamente
        se deberá Generar el Archivo Mensual Ventas.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concarsql_libroselectronicos41.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>En esta pantalla se podrá:</p>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_35_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={100}
          height={100}
        />
        <h1>o Alt-T</h1>
      </div>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_13_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={100}
          height={100}
        />
        <h1>o Alt-X</h1>
      </div>
      <div className="flex items-center justify-start">
        <h1>Al presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_35_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={100}
          height={100}
        />
        <p>el sistema generará la siguiente pantalla:</p>
      </div>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_36_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start">
        <h1>Presionar</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_37_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={100}
          height={100}
        />
      </div>
      <p>
        El archivo de texto del Registro de Ventas a cargar al Programa de
        Libros Electrónicos (PLE) de la SUNAT se generará en ruta especificada.
      </p>
      <p>
        Opcionalmente, se puede abrir el archivo de Ventas PLE y se observará el
        registro realizado.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_16_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        Si hubiera alguna inconsistencia saldrá una pantalla similar a la que
        salió en el Registro de Compras. Como se muestra en la pantalla
        inferior:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_17_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_13_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={100}
          height={100}
        />
      </div>
      <p>y el sistema generará la siguiente pantalla:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_18_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        Este archivo Excel contiene una fiel copia de los registros que se
        informarán en el PLE mediante el archivo de texto.
      </p>
      <h1 className="font-bold">
        FORMATO COMPROBACIÓN REGISTRO VENTAS CON DOCUMENTOS ADICIONALES PLE
      </h1>
      <p>
        Esta opción sirve para emitir un Registro de Ventas del período
        seleccionado que incluye los documentos adicionales (comprobantes
        omitidos y/o regularizados) ingresados.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_41_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        MES REGISTRO VENTAS: Ingresar el mes del Registro de Ventas con
        adicionales a generar
      </p>
      <p>MONEDA: Desplegar el menú y seleccionar la unidad monetaria</p>
      <p>
        TOTAL POR FECHA DMTO: Activar este flag si se desea emitir el reporte
        por fechas de los documentos.
      </p>
      <p>
        IMPRIMIR RESUMEN POR SUBDIARIO: Activar este flag si se desea enviar a
        pantalla el resumen por subdiario.
      </p>
      <p>IMPRIMIR NOMBRE EXTENDIDO POR COMPAÑÍA</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_42_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_impresora_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
      </div>
      <p>para mandar a la impresora.</p>
      <div className="flex items-center justify-start">
        <h1>el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_pantalla_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
      </div>
      <p>para ver el reporte en pantalla.</p>
      <div className="flex items-center justify-start">
        <h1>el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_guardar_como_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
      </div>
      <p>para guardar el reporte como archivo de texto.</p>
      <div className="flex items-center justify-start">
        <h1>el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_cb_c7__reportes_3_4.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
      </div>
      <p>para enviarlo a Excel.</p>
      <div className="flex items-center justify-start">
        <h1>Al presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_pantalla_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
      </div>
      <p>el sistema mostrará la siguiente pantalla:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_19_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>Adicionalmente, el sistema muestra el récord de comprobantes:</p>
      <p>Cantidad de Ventas Registradas en el Periodo (1) 2</p>
      <p>Cantidad de Ventas Corregidas (9) 1</p>
      <p>Cantidad de Ventas Validas 3</p>
      <p>
        Nota: El período y la fecha de emisión del comprobante deben pertenecer
        al mismo mes.
      </p>
      <h1 className="font-bold">LIBRO ELECTRÓNICO DE COMPRAS</h1>
      <h2 className="font-bold">
        Reportes/ Libros y Registros Oficiales/ Registro de Compras/ Libros
        Electrónicos
      </h2>
      <p>
        En esta opción se ubican el registro de documentos adicionales por
        correcciones, la generación del archivo de texto para carga al PLE del
        Registro de Compras y un reporte de comprobación de Registro de Compras
        con Documentos Adicionales.
      </p>
      <p>Estados en que se generan los comprobantes:</p>
      <ul className="px-5 list-disc">
        <li>
          ESTADO 0: Para los comprobantes que no tienen efecto en el crédito
          fiscal del IGV principalmente aquellos registrados con IGV=0.
        </li>
        <li>
          ESTADO 1: Para aquellos comprobantes con fecha de emisión del mes que
          se está generando.
        </li>
        <li>
          ESTADO 6: Para los comprobantes con fecha de emisión anterior al mes
          que se está generando, pero que se encuentran dentro de los 12 meses
          siguientes a su emisión.
        </li>
        <li>
          ESTADO 7: Para los comprobantes con fecha de emisión anterior al mes
          que se está generando, pero que se encuentran fuera de los 12 meses
          siguientes a su emisión.
        </li>
        <li>
          ESTADO 9: Cuando se registra una modificación de una operación de un
          mes ya informado, debe consignarse el correlativo y secuencia de la
          operación original.
        </li>
      </ul>
      <h1 className="font-bold">
        MANTENIMIENTO ARCHIVO REGISTRO COMPRAS ADICIONALES PLE
      </h1>
      <p>
        En este menú sólo se registrarán los comprobantes de compras que hayan
        contenido errores y se desea realizar correcciones para efectos de
        enviarlos a la SUNAT.
      </p>
      <p>
        Si fueran documentos no declarados, ingresarlos como si fueran
        comprobantes nuevos; mediante la opción: Comprobantes -{">"}{" "}
        Comprobantes Compras
      </p>
      <h1>CONSIDERACIONES ADICIONALES:</h1>
      <p>
        Para el caso de CORRECCIONES de información (9): Cuando se registra una
        modificación de una operación de un mes ya informado o una operación de
        un mes anterior, debe consignarse el correlativo de la operación
        original
      </p>
      <p>Ejemplo:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_20_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        Al hacer clic en la opción Mantenimiento Archivo Registro de Compras
        Adicionales PLE, el sistema muestra 2 opciones: PLE 4.0 y el 5.0. Se
        muestra en la pantalla como ejemplo el PLE 4.0:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concarsql_libroselectronicos52.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
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
          src="https://miconcar.com/uploads/documentos/concar_sql_4_9_mantenimiento_movimientos_bancos_3_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
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
          src="https://miconcar.com/uploads/documentos/concar_sql_4_9_mantenimiento_movimientos_bancos_5_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
        <h1>CONSULTAR (Alt-T)</h1>
      </div>
      <p>
        Utilizar cuando se desee consultar los documentos previamente ingresados
        en esta ventana.
      </p>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_11_5_mantenimiento_de_empresas_5_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
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
          src="https://miconcar.com/uploads/documentos/concar_sql_4_9_mantenimiento_movimientos_bancos_4_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
        <h1>BUSCAR (Alt-B)</h1>
      </div>
      <p>
        Utilizar cuando se desee buscar un registro entre varios comprobantes
        previamente ingresados en esta ventana.
      </p>
      <div className="flex items-center justify-start">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_libros_electronicos_2_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
      </div>
      <p>y el sistema generará la siguiente pantalla:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_21_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>Ingresar:</p>
      <p>
        PERÍODO DECLARACIÓN PLE: El sistema lo genera de forma automática. Es el
        período de declaración en el cual se va a realizar las rectificaciones.
        Siempre es el mes en el cual se está trabajando.
      </p>
      <p>
        TIPO DOCUMENTO: Seleccionar el tipo de documento al cual se requiere
        realizar rectificaciones.
      </p>
      <p>
        SERIE DOCUMENTO: Ingresar la serie del documento al cual se desea
        realizar rectificaciones.
      </p>
      <p>
        NÚMERO DOCUMENTO: Ingresar el número del documento al cual se requiere
        realizar rectificaciones.
      </p>
      <p>AÑO DUA: Ingresar el año de la DUA. En caso aplicara.</p>
      <p>
        FECHA DOCUMENTO: La fecha del documento al cual se desea realizar
        rectificaciones.
      </p>
      <p>
        Importante: Debe ser menor al período de declaración PLE, caso
        contrario, se emitirá el siguiente mensaje:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_3_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        FECHA VENCIMIENTO: La fecha de vencimiento del documento al cual se
        desea realizar rectificaciones. Importante: Para el tipo de documento 14
        (Recibo de servicios públicos), la fecha ingresada debe ser menor al
        período de declaración del PLE.
      </p>
      <p>
        PERÍODO A RECTIFICAR: El sistema lo determina de manera automática
        cuando se ha ingresado la fecha de documento.
      </p>
      <p>
        CORRELATIVO (SUBDIARIO-COMPROB-SEC): Desplegar el menú y seleccionar los
        subdiarios requeridos.
      </p>
      <p>
        TIPO DOCUMENTO IDENTIDAD: Desplegar el menú y seleccionar el tipo de
        documento del proveedor.
      </p>
      <p>RAZÓN SOCIAL: Ingresar la razón social del proveedor</p>
      <p>
        COLUMNA COMPRA: Desplegar el menú y seleccionar la columna del Registro
        de Compras, en donde se ubicará la data ingresada.
      </p>
      <p>
        MONEDA DECLARACIÓN: Unidad monetaria en que lleva la contabilidad la
        empresa.
      </p>
      <p>
        ISC: Monto del ISC del comprobante que no se declaró o al cual se desea
        realizar rectificaciones. En caso aplicara.
      </p>
      <p>
        BASE IMPONIBLE: Monto de la base imponible del comprobante al cual se va
        a realizar rectificaciones.
      </p>
      <p>
        OTROS TRIBUTOS: Otros tributos y cargos que no forman parte de la base
        imponible del documento y que se desean realizar rectificaciones. En
        caso aplicara.
      </p>
      <p>
        IGV: Monto del IGV del comprobante al que se desea realizar
        rectificaciones. En caso aplicara.
      </p>
      <p>
        IMPORTE TOTAL: El sistema realiza el cálculo de manera automática con
        los datos ingresados anteriormente.
      </p>
      <p>
        VALOR A. NO GRAVADA: Si el documento tuviera en parte, o todo,
        adquisiciones no gravadas ingresar el importe.
      </p>
      <p>
        TIPO CAMBIO: El sistema lo genera de manera automática. Previamente
        configurado en Mantenimiento Tipo de cambio
      </p>
      <p>
        FECHA DOCUMENTO REFERENCIA: Sólo se debe ingresar la fecha del documento
        en este campo, si el documento es una Nota de Crédito o Débit
      </p>
      <p>
        TIPO DOCUMENTO REFERENCIA: Sólo se debe ingresar el tipo de documento en
        este campo, si el documento es una Nota de Crédito o Débito
      </p>
      <p>
        SERIE DOCUMENTO REFERENCIA: Sólo se debe ingresar la serie, si el
        documento es una Nota de Crédito o Débito
      </p>
      <p>
        NÚMERO DOCUMENTO REFERENCIA: Sólo se debe ingresar el número de
        documento, si es una corrección.
      </p>
      <p>
        COMP. PAGO NO DOMICILIADO: Ingresar el comprobante de pago de un
        proveedor no domiciliado. En caso aplicara
      </p>
      <p>
        FECHA CONSTANCIA DETRACCIÓN: Ingresar la fecha de la constancia de la
        detracción del comprobante a corregir. En caso aplicara.
      </p>
      <p>
        NÚMERO CONSTANCIA DETRACCIÓN: Ingresar el número de la Constancia de
        Detracción del comprobante a corregir. En caso aplicara.
      </p>
      <p>RETENCIÓN: Elegir entre: a) Afecto retención y b) Retención</p>
      <p>
        ESTADO: Por defecto, el sistema considerará el código: 9: Correcciones
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_22_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_cb_c10_5_tranfiere_pendientes_ano_anterior_2_7.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
      </div>
      <p>
        y el sistema actualizará la pantalla principal con el nuevo documento:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concarsql_libroselectronicos61.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start">
        <h1>Al presionar </h1>
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_modificar_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
      </div>
      <p>
        y ubicarse sobre la fila correspondiente, el sistema modificará un
        documento de compras registrado:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_24_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start">
        <h1>Luego de realizar los cambios, dar clic en el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_cb_c10_5_tranfiere_pendientes_ano_anterior_2_7.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
      </div>
      <p>al salir se reflejará los cambios en la pantalla principal:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concarsql_libroselectronicos71.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start">
        <h1>Al presionar </h1>
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_consultar_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
      </div>
      <p>
        y ubicarse sobre la fila correspondiente, el sistema mostrará el
        formulario con los datos del documento de compras DESACTIVADO.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_26_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        Para eliminar un registro, deberá ubicarse sobre el documento de compras
      </p>
      <div className="flex items-center justify-start">
        <h1>y dar clic en el botón </h1>
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_eliminar_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
      </div>
      <Image
        src="https://miconcar.com/uploads/documentos/concarsql_libroselectronicos81.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start">
        <h1>En el mensaje, seleccionar </h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_cb_c5_1_comprobantes_estandar_si_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={100}
          height={100}
        />
      </div>
      <p>para eliminar el documento</p>
      <div className="flex items-center justify-start">
        <h1>en caso contrario</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_cb_c5_1_comprobantes_estandar_no_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={100}
          height={100}
        />
      </div>
      <p> y el sistema ignorará el proceso</p>
      <p>Al eliminar el documento, el formulario principal se actualizará.</p>
      <h1 className="font-bold">
        CREA ARCHIVO 8.1 REGISTRO COMPRAS PARA EL PLE
      </h1>
      <p>
        Esta opción genera archivos en formato de texto o en Excel. Previamente
        se deberá Generar el Archivo Mensual Compras. El sistema mostrará 2
        opciones: el PLE 4.0 y el 5.0. Se muestra como ejemplo en pantalla el
        PLE 4.0:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concarsql_libroselectronicos91.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>En esta pantalla se podrá:</p>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_35_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={100}
          height={100}
        />
        <h1>o Alt-T</h1>
      </div>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_13_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={100}
          height={100}
        />
        <h1>o Alt-X</h1>
      </div>
      <div className="flex items-center justify-start">
        <h1>Al presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_35_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={100}
          height={100}
        />
        <p>el sistema generará la siguiente pantalla:</p>
      </div>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_36_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start">
        <h1>Presionar</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_37_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={100}
          height={100}
        />
      </div>
      <p>
        El archivo de texto del Registro de Compras a cargar al Programa de
        Libros Electrónicos (PLE) de la SUNAT se generará en ruta especificada.
      </p>
      <p>
        Opcionalmente, se puede abrir el archivo de Compras PLE y se observará
        el registro realizado.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_29_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        Si hubiera alguna inconsistencia saldrá una pantalla similar a la
        siguiente:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_30_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start">
        <h1>Presionar</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_13_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={100}
          height={100}
        />
      </div>
      <p>y el sistema generará la siguiente pantalla:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_31_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={600}
        height={500}
      />
      <h1 className="font-bold">IMPORTANTE:</h1>
      <p>
        1. En el caso de documentos de compras del exterior (No domiciliados) no
        utilizar el tipo de documento FT (Factura); lo que se debe realizar es,
        crear un Tipo de Documento exclusivo en la Tabla General 06; incluyendo
        el código SUNAT 91.
      </p>
      <p>Por ejemplo:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_19_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={600}
        height={500}
      />
      <p>
        Adicionalmente, debe incluirse este tipo de documento en el
        Mantenimiento Parámetros Compras:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_20_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={600}
        height={500}
      />
      <p>
        Adicionalmente el PLE obliga, en el caso de documentos código SUNAT 91,
        se consigne el número de comprobante de no domiciliados el cuál se debe
        agregar en la opción Reportes-{">"} Registro Compras-{">"} Mantenimiento
        Archivo Compras, ubicando el documento y seleccionando el ícono
        modificar. Allí debe ingresarse el Comp. Servicio Exter
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_21_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={600}
        height={500}
      />
      <p>Luego Grabar.</p>
      <p>
        Importante: Después de realizar esta modificación debe generarse el
        archivo para el PLE Compras, si se realizar nuevamente la Generación del
        Archivo Mensual de Compras el número de comprobante del exterior se
        borra.
      </p>
      <p>
        2. El tipo de documento 14 (Recibo de Servicios Públicos) deben ser
        ingresados con la Fecha de Vencimiento como requisito indispensable.
        Asimismo, la fecha del documento no puede ser superior al mes del
        período para su procesamiento.
      </p>
      <p>Por ejemplo:</p>
      <p>Fecha vencimiento de Recibo RC001-78985: 14/04/14</p>
      <p>Mes a partir del cual se puede incluir: Abril-2014</p>
      <h1 className="font-bold">
        FORMATO DE COMPROBACIÓN REGISTRO COMPRAS CON DOCUMENTOS ADICIONALES
      </h1>
      <p>
        Esta opción sirve para emitir un Registro de Compras del período
        seleccionado que incluye los documentos adicionales (comprobantes
        omitidos y/o regularizados) ingresados.
      </p>{" "}
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_63_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={600}
        height={500}
      />
      <p>Ingresar:</p>
      <p>
        MES REGISTRO COMPRAS: Ingresar el mes del Registro de Compras a generar
      </p>
      <p>MONEDA: Desplegar el menú y seleccionar la unidad monetaria</p>
      <p>(a) Orden: El sistema cuenta con las opciones de filtrado por:</p>
      <div>
        <p>Subdiario/Comprobante-con quiebre</p>
        <p>Fecha Documento</p>
        <p>Proveedor</p>
        <p>Subdiario/comprobante-sin quiebre</p>
        <p>Subdiario/fecha Dcmto.- con quiebre</p>
      </div>
      <div className="flex items-center justify-start">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_impresora_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
      </div>
      <p>para mandar a la impresora.</p>
      <div className="flex items-center justify-start">
        <h1>el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_pantalla_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
      </div>
      <p>para ver el reporte en pantalla.</p>
      <div className="flex items-center justify-start">
        <h1>el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_guardar_como_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
      </div>
      <p>para guardar el reporte como archivo de texto.</p>
      <div className="flex items-center justify-start">
        <h1>el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_cb_c7__reportes_3_4.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
      </div>
      <p>para enviarlo a Excel.</p>
      <div className="flex items-center justify-start">
        <h1>Al presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_pantalla_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
      </div>
      <p>el sistema mostrará la siguiente pantalla:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_19_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>Adicionalmente, el sistema muestra el récord de comprobantes:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_33_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <h1 className="font-bold">
        GENERACIÓN DE ARCHIVOS DIARIO Y MAYOR PARA SUNAT
      </h1>
      <p>Configuración inicial:</p>
      <p>
        Ingresar al mantenimiento de compañías ubicado en el menú Administración
        Sistema:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_45_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>Seleccionar una compañía y seleccionar la opción “Modificar”</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_46_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
         Seleccionar el Tipo de Plan de Cuentas adecuado para la compañía. Por
        defecto el sistema tendrá registrado el valor “01 Plan Contable General
        Empresarial”
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_47_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <h1 className="font-bold">LIBRO DIARIO</h1>
      <h2 className="font-bold">
        Registro de Omisiones para Libro Diario y Mayor
      </h2>
      <p>
        Esta opción permite incluir asientos omitidos en meses anteriores en el
        libro Diario y Mayor. Para poder incluir asientos en esta opción es
        NECESARIO que el comprobante contable omitido se registre en el MES EN
        QUE SE VA A REGUALIZAR su omisión.
      </p>
      <p>
        a. Ingresar a la opción ubicada en: Reportes/Libros y Registros
        oficiales/Libro Diario/Libros Electrónicos. El sistema mostrará la
        siguiente pantalla:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_34_3.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>Ingresar:</p>
      <p>
        Indique Mes a Informar: Seleccionar el mes en que se va a regularizar la
        omisión de un mes anterior ya enviado.
      </p>
      <p>Clic al botón Nuevo Registro de Omisión</p>
      <p>El sistema mostrará la siguiente pantalla:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_36_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>Ingresar:</p>
      <p>
        Comprobante: En el primer recuadro digitar o elegir con Shift + F1 el
        subdiario donde está registrado el comprobante. En el segundo recuadro
        elegir con Shift + F1
      </p>
      <p>Fecha Real: Ingresar la fecha real de la operación.</p>
      <p>
        Período Real: El sistema toma el periodo de la fecha real permitiendo
        cambiarlo.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_37_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        En este caso el comprobante es del mes de marzo pero fue registrado con
        fecha 01/04/2014
      </p>
      <p>Clic en Aceptar</p>
      <h1 className="font-bold">Crear Archivo 5.1 Libro Diario para PLE</h1>
      <p>
        Ingresar a la opción ubicada en: Reportes/Libros y Registros
        oficiales/Libro Diario/Libros Electrónicos, el sistema muestra 2
        opciones: el PLE 4.0 y el 5.0. Para ello se debe haber generado
        previamente el Libro de compras y ventas. Se muestra como ejemplo en la
        pantalla el PLE 4.0:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concarsql_libroselectronicos101.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>MONEDA: Seleccionar MN soles o US Dólares.</p>
      <p>
        CONSIDERAR CUENTA DE ORDEN PARA LIBRO DIARIO: activa check en caso se
        desee.
      </p>
      <p>MES: Digitar mes a generar.</p>
      <p>GLOSA A IMPRIMIR: Seleccionar entre Principal o Movimientos</p>
      <p>
        DETALLE DEL PLAN UTILIZADO: Indicar si se desea crear el archivo 5.3 y,
        en caso se desee, se podrá generar con datos o vacío.
      </p>
      <p>Emitir el archivo dando clic al botón “Generar en TXT”</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_41_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>Guardar</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_42_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>Guardar</p>
      <p>Reporte de Información Generada:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_43_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>Muestra de archivo 5.1</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_44_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>Muestra de archivo 5.3:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_45_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>Emitir la hoja dando clic al botón “Generar en Excel”</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_46_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <h1 className="font-bold">
        Crear Archivo 5.2 Libro Diario Simplificado para PLE
      </h1>
      <p>
        Ingresar a la opción ubicada en: Reportes/Libros y Registros
        oficiales/Libro Diario/Libros Electrónicos, el sistema muestra 2
        opciones: el PLE 4.0 y el 5.0. Para ello se debe haber generado
        previamente el Libro de compras y ventas. Se muestra como ejemplo en la
        pantalle el PLE 4.0:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concarsql_libroselectronicos111.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>MES: Digitar mes a generar.</p>
      <p>
        CONSIDERAR CUENTA DE ORDEN PARA LIBRO DIARIO SIMPLIFICADO: activa check
        en caso se desee.
      </p>
      <p>MONEDA: Seleccionar MN soles o US Dólares.</p>
      <p>GLOSA A IMPRIMIR: Seleccionar entre Principal o Movimientos</p>
      <p>
        DETALLE DEL PLAN UTILIZADO: Indicar si se desea crear el archivo 5.4 y,
        en caso se desee, se podrá generar con datos o vacío.
      </p>
      <p>Emitir el archivo dando clic al botón “Generar en TXT”</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_55_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>Guardar</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_56_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>Guardar</p>
      <p>Reporte de Información Generada:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_57_2.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={600}
        height={500}
      />
      <p>Emitir la hoja dando clic al botón “Generar en Excel”</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_62_2.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={600}
        height={500}
      />
      <h1 className="font-bold">Crear Archivo 6.1 Libro Mayor para PLE</h1>
      <p>
        Ingresar a la opción ubicada en: Reportes/Libros y Registros
        oficiales/Libro Mayor/Libros Electrónicos, el sistema muestra 2
        opciones: el PLE 4.0 y el PLE 5.0. Para ello se debe haber generado
        previamente el Libro de compras y ventas. Se muestra como ejemplo en
        pantalla el PLE 4.0:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concarsql_libroselectronicos121.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>MONEDA: Seleccionar MN soles o US Dólares.</p>
      <p>
        CONSIDERAR CUENTA DE ORDEN PARA LIBRO DIARIO: activa check en caso se
        desee.
      </p>
      <p>MES: Digitar mes a generar.</p>
      <p>GLOSA A IMPRIMIR: Seleccionar entre Principal o Movimientos</p>
      <p>Emitir el archivo dando clic al botón “Generar en TXT”</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_59_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>Guardar</p>
      <p>Reporte de Información Generada: </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_60_2.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>Emitir la hoja dando clic al botón “Generar en Excel”</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_libros_electronicos_62_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={600}
        height={500}
      />
    </div>
  );
};

export default GenerarLibrosElectronicos;
