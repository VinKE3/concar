import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const MovimientoDatos = () => {
  const data = [
    {
      id: 1,
      title: "Modelo_carga_comprobante_detraccion_",
      href: "https://miconcar.com/uploads/documentos/400_Carga_de_comprobantes_desde_xls_detraccion.pdf.xls",
    },
    {
      id: 2,
      title: "Modelo_carga_comprobante_nc_",
      href: "https://miconcar.com/uploads/documentos/400_Carga_de_comprobantes_desde_xls_nota_credito.pdf.xls",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Esta opción permite adicionar comprobantes contables al sistema
        originados ya sea por la opción de Transfiere Comprobantes del CONCAR®
        SQL, por archivos externos generados por una interfaz o desde Excel.
      </p>
      <h1 className="font-bold">12.1 Movimiento Datos</h1>
      <h2 className="font-bold">12.1.1 Carga de Comprobantes</h2>
      <p>
        Esta opción permite adicionar comprobantes contables al sistema
        originados ya sea por la opción de Transfiere Comprobantes del CONCAR®
        SQL, por archivos externos generados por una interfaz de acuerdo a las
        especificaciones para su elaboración o por asientos generados por otros
        sistemas de Real Systems tales como SOFTCOM SQL, MODCOM SQL, SISLOG SQL
        y Placar CB. Seleccionada la opción el sistema mostrará la siguiente
        pantalla:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/modulo_ulititarios_mov_datos_1_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>Donde:</p>
      <p>
        CC000213.dbf y CD000213.dbf son archivos generados desde la interfaz de
        carga de asientos desde otros sistemas que corresponden a la compañía
        código 0002 y al ejercicio 2013.
      </p>
      <p>
        CTC0213.dbf y CTD0213.dbf son archivos generados desde la opción
        Transfiere Comprobantes del CONCAR® SQL que corresponden a la compañía
        código 0002 y al ejercicio 2013.
      </p>
      <div className="flex items-center justify-start">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/modulo_ulititarios_mov_datos_2_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={70}
          height={100}
        />
      </div>
      <h1 className="font-bold">12.1.2 Carga de Comprobantes de Tabla SQL</h1>
      <p>
        Permite adicionar comprobantes contables al sistema desde tablas
        ubicadas en el Servidor SQL. Seleccionada la opción el sistema mostrará
        la siguiente pantalla:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/modulo_ulititarios_mov_datos_3_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        COMPAÑÍA: Sale automáticamente el número de compañía al que se ha
        ingresado.
      </p>
      <p>
        EJERCICIO: Sale automáticamente el ejercicio al que se ha ingresado.
      </p>
      <p>SUBDIARIO: Elegir el subdiario a cargar.</p>
      <p>
        CARGAR ANEXOS: Activar este check en caso se desee cargar anexos. En ese
        caso es requisito tener creada la tabla CANXXXX (donde XXXX es el número
        de compañía) conteniendo los anexos a cargar en el Servidor SQL.
      </p>
      <p>
        TABLAS A CARGAR: Para realizar la carga es necesario que estén en el
        servidor SQL los siguientes archivos:
      </p>
      <p>Para carga de comprobantes:</p>
      <p>CCXXXXAA: Donde XXXX = Código de Compañía y AA= Ejercicio</p>
      <p>CDXXXXAA: Donde XXXX = Código de Compañía y AA= Ejercicio</p>
      <p>Para carga de anexos (opcional):</p>
      <p>CANXXX: Donde XXXX = Código de Compañía</p>
      <p>En esta opción se podrá:</p>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/modulo_ulititarios_mov_datos_4_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={100}
          height={100}
        />
        <h1>
          Permite realizar la carga de los comprobantes y de los anexos en caso
          se ha activado el check Cargar Anexos.
        </h1>
      </div>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/modulo_ulititarios_mov_datos_5_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={100}
          height={100}
        />
        <h1>
          Permite realizar una consulta previa de los comprobantes a cargar.
        </h1>
      </div>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/modulo_ulititarios_mov_datos_6_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={100}
          height={100}
        />
        <h1>
          Permite imprimir los comprobantes que se encuentra en la tabla
          interface.
        </h1>
      </div>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/modulo_ulititarios_mov_datos_7_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={100}
          height={100}
        />
        <h1>Salir de la opción.</h1>
      </div>
      <div className="flex items-center justify-start">
        <h1>Al presionar</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/modulo_ulititarios_mov_datos_7_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={100}
          height={100}
        />
      </div>
      <p>la interface realizará lo siguiente:</p>
      <ul className="px-5 list-disc">
        <li>
          Compara las estructuras de la interface con respecto a las tablas de
          destino.
        </li>
        <li>
          Proceso de validación de datos de la interface con respecto a los
          campos que utilizan las Tablas Generales del CONCAR® SQL.
        </li>
        <li>
          Validación de los datos obligatorios que deben ingresar en estas
          tablas como son: que exista el subdiario, cuenta, centro de costos,
          etc.
        </li>
        <li>
          En el caso encuentre errores en esta validaciones mostrara un reporte
          indicando el error con respecto a la tabla.
        </li>
      </ul>
      <h1 className="font-bold">12.1.3 Transfiere Plan Cuentas, Anexo</h1>
      <p>
        Esta opción permite transferir el plan de cuentas, tabla de anexos,
        tipos de cambio y tablas generales a archivos que se pueden guardar en
        el disco duro o en una memoria USB.
      </p>
      <p>Seleccionada la opción el sistema mostrará la siguiente pantalla:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/modulo_ulititarios_mov_datos_9_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>Seleccionar la Unidad y Carpeta de destino.</p>
      <div className="flex items-center justify-start">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/modulo_ulititarios_mov_datos_10_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={60}
          height={100}
        />
      </div>
      <p>
        Genera los siguientes archivos donde el 31 es el código de la compañía:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/modulo_ulititarios_mov_datos_11_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <h1 className="font-bold">12.1.4 Carga de Anexos</h1>
      <p>
        Esta opción permite cargar al sistema los anexos de otra base de datos o
        también desde otra compañía renombrando por Windows el archivo CANXX.dbf
        (donde XX=Últimos dos dígitos de la compañía) con el código de la
        compañía. Seleccionada la opción el sistema mostrará la siguiente
        pantalla:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/modulo_ulititarios_mov_datos_12_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        En parte izquierda seleccionar la unidad y carpeta donde está el archivo
        CANXX.dbf (XX= código de compañía en 2 dígitos). En derecha deberá
        aparecer el archivo a cargar.
      </p>
      <div className="flex items-center justify-start">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/modulo_ulititarios_mov_datos_13_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={60}
          height={100}
        />
      </div>
      <p>
        Si se realizó correctamente el proceso el sistema emitirá el siguiente
        mensaje:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/modulo_ulititarios_mov_datos_14_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={350}
        height={500}
      />
      <h1 className="font-bold">12.1.5 Transfiere Comprobantes</h1>
      <p>
        Esta opción permite transferir por mes o por subdiario los comprobantes
        contables de una compañía y ejercicio específico a archivos que se
        pueden guardar en el disco duro o en una memoria USB. Seleccionada la
        opción el sistema mostrará la siguiente pantalla:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/modulo_ulititarios_mov_datos_15_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>UNIDAD DESTINO: Seleccionar la unidad de disco de destino.</p>
      <p>DIRECTORIO DESTINO: Seleccionar la carpeta de destino.</p>
      <p>MES A TRANSFERIR: Si se elige esta opción ingresar número de mes.</p>
      <p>
        SUB – DIARIO: Si se elige esta opción ingresar los siguientes datos:
      </p>
      <p>
        OMPROBANTE INICIAL/FINAL: Elegir con Shift + F1 el rango de comprobantes
        a transferir.
      </p>
      <div className="flex items-center justify-start">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/modulo_ulititarios_mov_datos_16_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={60}
          height={100}
        />
      </div>
      <p>
        Se generan dos archivos .dbf con las cabeceras y detalles de
        comprobantes donde el 31 es el código de la compañía y el 13 el año en
        dos dígitos:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/modulo_ulititarios_mov_datos_17_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <h1 className="font-bold">12.1.6 Consolidación Empresas comunes</h1>
      <p>
        Esta opción permite consolidar la información contable de compañías que
        comparten el plan de cuentas y otras bases de datos.
      </p>
      <h1 className="font-bold">Requisitos y configuraciones previas:</h1>
      <ul className="px-5 list-disc">
        <li>
          Las empresas a consolidarse deberán tener plan de cuentas común.
        </li>
        <li>Utilizar sub diarios diferentes para las diferentes empresas.</li>
        <li>Deben ser movimientos de un mismo periodo contable.</li>
        <li>
          Se deberá crear una empresa nueva que será la que recepcione todos los
          movimientos de las empresas a consolidar, deberá tener plan de cuentas
          común (crear con la primera opción elección de Plan de Cuentas de
          creación de compañías).
        </li>
        <li>Configurar en la Tabla 93 de la Compañía Destino.</li>
      </ul>
      <p>Ejemplo:</p>
      <table style={{ borderCollapse: "separate", borderSpacing: "10px 0" }}>
        <thead>
          <tr>
            <th className="font-bold">Clave</th>
            <th className="font-bold">Descripción</th>
            <th className="font-bold">------------</th>
            <th className="font-bold">------------</th>
            <th className="font-bold">------------</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>XTRA0001-2</td>
            <td>0002</td>
            <td>CIA 2</td>
            <td>A</td>
            <td>0001</td>
          </tr>
          <tr>
            <td>XTRA0001-3</td>
            <td>0003</td>
            <td>CIA 3</td>
            <td>A</td>
            <td>0001</td>
          </tr>
          <tr>
            <td>XTRA0001-2</td>
            <td>0002</td>
            <td>CIA 2</td>
            <td>A</td>
            <td>0001</td>
          </tr>
          <tr>
            <td>XTRA0001-4</td>
            <td>0004</td>
            <td>CIA 4</td>
            <td>A</td>
            <td>0001</td>
          </tr>
        </tbody>
      </table>
      <p>Donde:</p>
      <p>
        0001 (XTRA0001-2) = Empresa nueva que va a contener la información de
        las empresas 0002, 0003, 0004.
      </p>
      <p>
        0002, 0003, 0004 = Empresas que se van a consolidar en la empresa 0001.
      </p>
      <p>Seleccionada la opción el sistema mostrará la siguiente pantalla:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/modulo_ulititarios_mov_datos_18_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        Seleccionar el mes a consolidar y dar clic en el botón Consolidar
        Comprobantes.
      </p>
      <p>Inmediatamente se mostrará un mensaje similar al siguiente:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/modulo_ulititarios_mov_datos_19_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/modulo_ulititarios_mov_datos_20_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={60}
          height={100}
        />
      </div>
      <p>
        para continuar; si el sistema encontrara algún comprobante que se
        repitiera en alguna de las compañías que se van a transferir, se
        mostrará un reporte con los comprobantes repetidos de cada compañía y se
        cancelará el proceso de consolidación.
      </p>
      <p>
        En este proceso también se transfieren los anexos de las demás compañías
        que no existen en la compañía origen.
      </p>
      <h1 className="font-bold">
        12.1.7 Consolidación Empresas independientes
      </h1>
      <p>
        Esta opción permite consolidar la información contable de compañías que
        tienen plan de cuentas independiente.
      </p>
      <h1 className="font-bold">Requisitos y configuraciones previas:</h1>
      <ul className="px-5 list-disc">
        <li>Utilizar sub diarios diferentes para las diferentes empresas.</li>
        <li>Deben ser movimientos de un mismo periodo contable.</li>
        <li>
          Se deberá crear una empresa nueva que será la que recepcione todos los
          movimientos de las empresas a consolidar.
        </li>
        <li>Configurar en la Tabla 93 de la Compañía Destino.</li>
        <p>Ejemplo:</p>
      </ul>
      <table style={{ borderCollapse: "separate", borderSpacing: "10px 0" }}>
        <thead>
          <tr>
            <th className="font-bold">Clave</th>
            <th className="font-bold">Descripción</th>
            <th className="font-bold">------------</th>
            <th className="font-bold">------------</th>
            <th className="font-bold">------------</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>XTRA0001-2</td>
            <td>0002</td>
            <td>CIA 2</td>
            <td>A</td>
            <td>0001</td>
          </tr>
          <tr>
            <td>XTRA0001-3</td>
            <td>0003</td>
            <td>CIA 3</td>
            <td>A</td>
            <td>0001</td>
          </tr>
          <tr>
            <td>XTRA0001-2</td>
            <td>0002</td>
            <td>CIA 2</td>
            <td>A</td>
            <td>0001</td>
          </tr>
          <tr>
            <td>XTRA0001-4</td>
            <td>0004</td>
            <td>CIA 4</td>
            <td>A</td>
            <td>0001</td>
          </tr>
        </tbody>
      </table>
      <p>Donde:</p>
      <p>
        0001 (XTRA0001-2) = Empresa nueva que va a contener la información de
        las empresas 0002, 0003, 0004.
      </p>
      <p>
        0002, 0003, 0004 = Empresas que se van a consolidar en la empresa 0001.
      </p>
      <p>Seleccionada la opción el sistema mostrará la siguiente pantalla:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/modulo_ulititarios_mov_datos_21_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start">
        <h1>Seleccionar el mes a consolidar y dar clic en el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/modulo_ulititarios_mov_datos_22_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={60}
          height={100}
        />
      </div>
      <p>Inmediatamente se mostrará un mensaje similar al siguiente:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/modulo_ulititarios_mov_datos_23_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/modulo_ulititarios_mov_datos_24_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={60}
          height={100}
        />
      </div>
      <p>
        para continuar; si el sistema encontrara algún comprobante que se
        repitiera en alguna de las compañías que se van a transferir, se
        mostrará un reporte con los comprobantes repetidos de cada compañía y se
        cancelará el proceso de consolidación.
      </p>
      <p>
        En este proceso también se transfieren los anexos y los planes de cuenta
        de las demás compañías que no existen en la compañía origen.
      </p>
      <h1 className="font-bold">12.1.8 Carga Tablas Datos PDT Honorarios</h1>
      <p>
        Esta opción permite cargar las tablas de la Planilla Electrónica. Para
        ello se debe tener un archivo llamado PLANILLA.dbf. Seleccionada la
        opción el sistema mostrará la siguiente pantalla:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/modulo_ulititarios_mov_datos_25_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start">
        <h1>Ubicar la ruta donde está el archivo mencionado con el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/modulo_ulititarios_mov_datos_26_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={30}
          height={30}
        />
      </div>
      <div className="flex items-center justify-start">
        <h1>Presionar el botón </h1>
        <Image
          src="https://miconcar.com/uploads/documentos/modulo_ulititarios_mov_datos_27_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={100}
          height={100}
        />
      </div>
      <h1 className="font-bold">
        12.1.9 Carga de Comprobantes (Access) – CONEXACCESS
      </h1>
      <p>
        Permite la carga de comprobantes contables desde una base de datos
        Access. Para configurar la ruta en donde se va conectar con la base de
        datos Access, se debe ingresar al Mantenimiento de Empresas y agregar la
        ruta donde está ubicada la base de datos de Access, extensión mdb.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/modulo_ulititarios_mov_datos_28_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>Seleccionada la opción el sistema mostrará la siguiente pantalla:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/modulo_ulititarios_mov_datos_29_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        RUTA: Se mostrará la ruta configurada en el mantenimiento de empresas.
      </p>
      <p>
        SUBDIARIO: Configurar en el Mantenimiento Tabla General-Tabla 02, el
        subdiario del CONCAR® SQL contra el subdiario de la base de datos a
        cargar.
      </p>
      <p>Por ejemplo:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/modulo_ulititarios_mov_datos_30_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        FECHA INICIAL/FINAL: Indicar el rango de fechas a cargar los
        comprobantes del subdiario elegido, las fechas ingresar debe pertenecer
        a un mismo mes y año del ejercicio.
      </p>
      <p>
        CARGA DE COMPROBANTES: Activar este casillero con check para incluir a
        los comprobantes y/o anexos.
      </p>
      <div className="flex items-center justify-start">
        <h1>Hacer clic en</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/modulo_ulititarios_mov_datos_31_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={100}
          height={70}
        />
      </div>
      <p>
        Este botón realizará el proceso de verificación y conexión con la base
        de datos Access y habilitara los paneles de seleccionar el destino de
        los archivos a generar los comprobantes y el panel para elegir el
        subdiario, rango de fechas e información a cargar.
      </p>
      <p>
        Terminado ello, el sistema mostrará el siguiente mensaje y un reporte de
        los comprobantes migrados.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/modulo_ulititarios_mov_datos_32_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={300}
        height={300}
      />
      <h1 className="font-bold">12.1.10 Carga de Comprobantes desde Excel</h1>
      <p>
        Proceso que carga los comprobantes registrados en una hoja de Excel (con
        las versiones .xls o xlsx) bajo un formato establecido. Tomar en cuenta
        que si está trabajando con la versión de redes (multiusuario) ningún
        otro usuario debe de estar trabajando en el Concar.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_1_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>Donde:</p>
      <ul className="font-bold px-5">
        <li>
          Explorar: Seleccionar la unidad de disco y la carpeta para ubicar el
          archivo de Excel que contiene los comprobantes a importar
        </li>
        <li>
          Lista de archivos: Filtra los archivos de Excel (versiones .xls y
          .xlsx) de la carpeta seleccionada.
        </li>
        <li>
          Check “Respetar numeración de comprobante”: Determina si al momento de
          la importación se mantiene la numeración de comprobantes registrados
          en al archivo del Excel, estos validarán que no exista en la tabla de
          comprobantes. Si se encuentrara desactivado, el proceso generará, en
          forma automática el número de comprobante.
        </li>
        <li>
          Botón “Exportar Formato”: El proceso genera el formato del Excel para
          la importación de comprobantes.
        </li>
        <li>
          Botón “Validación”: El sistema realiza una validación del contenido
          del archivo del Excel. Verifica que no falte algún dato obligatorio o
          exista inconsistencias
        </li>
        <li>
          Botón “Importar”: Se realiza una validación, si la información del
          archivo del Excel está correcta, inicia el proceso de importación
          grabando estos comprobantes.
        </li>
        <li>
          Botón “Continuar”: Restaura los controles del formulario para un nuevo
          proceso de importación.
        </li>
        <li>Botón “Salir”: Salir del proceso</li>
      </ul>
      <h1 className="font-bold">Estructura formato del Archivo de Excel</h1>
      <p>
        Al abrir el formulario de “Carga de comprobante desde Excel”, dar clic
        en el botón “Exportar Formato”, nos genera el siguiente archivo de
        Excel:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_2_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_3_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_4_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_5_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>Mostrándose las siguientes columnas:</p>
      <ul className="px-5 list-disc">
        <li>
          Columna B - Sub Diario: Columna con dato obligatorio. Ingresar el
          código del subdiario para el comprobante, debe repetirse por cada
          línea del comprobante. Debe existir en la Tabla General 02.
        </li>
        <li>
          Columna C - Número de Comprobante: Columna con dato obligatorio. Si el
          check “Respetar numeración de comprobante” se encontrara habilitado,
          no debería existir en la tabla de comprobantes. En caso contrario
          deberá ser un número de control para identificar a cada comprobante.
        </li>
        <li>
          Columna D - Fecha de Comprobante: Columna con dato obligatorio. Se
          debe ingresar la fecha para el comprobante, debe ser una fecha válida
          con formato “DD/MM/AAAA”
        </li>
        <li>
          Columna E - Código de Moneda: Columna con dato obligatorio. Se ingresa
          la moneda de la operación contable, debe existir en la Tabla General
          03.
        </li>
        <li>
          Columna F - Glosa Principal: Columna con dato obligatorio. Se ingresa
          la glosa de la cabecera del comprobante, no debe exceder los 40
          caracteres.
        </li>
        <li>
          Columna G - Tipo de Cambio: Se ingresa el tipo de cambio, sólo si en
          el campo de Tipo de Conversión se ingresara el valor “C” (Cambio
          Especial).
        </li>
        <li>
          Columna H - Tipo de Conversión: Columna con dato obligatorio, solo se
          podrá ingresar los siguientes valores: “C”= Especial, “M”= Compra,
          “V”= Venta, “F”= De acuerdo a fecha.
        </li>
        <li>
          Columna I - Flag de Conversión de Moneda: Columna con dato
          obligatorio. Sólo se podrá ingresar los siguientes valores: “S” = Si
          se convierte, “N”= No se convierte
        </li>
        <li>
          Columna J - Fecha Tipo de Cambio: En esta columna se ingresa la Fecha
          del Tipo de Cambio, solo si en la columna de Tipo de Conversión se
          hubiera ingresado el valor de “F” (De acuerdo a fecha).
        </li>
        <li>
          Columna K - Cuenta Contable: Columna con dato obligatorio. Se ingresa
          el código de la cuenta contable; debe existir en el Mantenimiento de
          Plan de Cuentas.
        </li>
        <li>
          Columna L - Código de Anexo: En esta columna se ingresa el código de
          Anexo, sólo si la cuenta contable tiene configurado un tipo de anexo.
          Este código (y el tipo configurado en la cuenta contable) debe existir
          en el Mantenimiento de anexos.
        </li>
        <li>
          Columna M - Código de Centro de Costo: En esta columna se ingresa un
          código de Centro de costo, sólo si la cuenta contable tiene el flag
          activado de Centro de Costos
        </li>
        <li>
          Columna N - Debe/Haber: Columna con dato obligatorio, sólo debe
          contener los siguientes valores: “D” (debe) o “H” (Haber)
        </li>
        <li>
          Columna O - Importe Original: En esta columna se ingresa el importe en
          moneda original del movimiento contable, el valor debe estar
          comprendido entre {">"}=0 y {"<"}=99999999999.99
        </li>
        <li>
          Columna P - Importe en Dólares: En esta columna se ingresa el importe
          en dólares del movimiento de la cuenta, sólo si el flag de Conversión
          de Moneda es “N”. Este valor debe estar comprendido entre {">"}=0 y{" "}
          {"<"}=99999999999.99.
        </li>
        <li>
          Columna Q - Importe en Soles: En esta columna se ingresa el importe en
          soles del movimiento de la cuenta, sólo si flag de Conversión de
          Moneda es “N” ”. Este valor debe estar comprendido entre {">"}=0 y{" "}
          {"<"}=99999999999.99.
        </li>
        <li>
          Columna R - Tipo de Documento: En esta columna se ingresa un tipo de
          documento sólo si la cuenta contable tiene habilitado el flag de
          documento de referencia. Debe existir en la Tabla General 06.
        </li>
        <li>
          Columna S - Número de Documento: En esta columna se ingresa el número
          del documento (incluido la serie), sólo si la cuenta contable tiene
          habilitado el flag de Documento de Referencia.
        </li>
        <li>
          Columna T - Fecha de Documento: En esta columna se ingresa la fecha
          del documento, sólo si la cuenta contable tiene habilitado el flag de
          Documento de Referencia, debe ingresarse una fecha válida con formato
          DD/MM/AAAA.
        </li>
        <li>
          Columna U - Fecha de Vencimiento, En esta columna se ingresa una fecha
          de vencimiento, solo si la cuenta contable tiene habilitado el flag de
          Fecha de Vencimiento, debe ser una fecha valida con formato
          “DD/MM/AAAA”
        </li>
        <li>
          Columna V - Código de Área: En esta columna se ingresa un código de
          área, definidos en la Tabla General 26. Sólo se ingresa si la cuenta
          tiene habilitado el flag de Área.
        </li>
        <li>
          Columna W - Glosa Detalle: En esta columna se ingresa la glosa para el
          detalle de comprobante.
        </li>
        <li>
          Columna X - Código de Anexo Auxiliar: Se ingresa un código de anexo
          auxiliar o de referencia. Sólo se ingresa si la cuenta contable tiene
          configurado un tipo de Anexo de referencia debiendo estar registrado
          en Mantenimiento de anexos (Conjuntamente con el tipo de anexo de
          referencia de la cuenta contable)
        </li>
        <li>
          Columna Y - Medio de Pago: En esta columna se registra un código de
          medio de pagos, sólo si la cuenta tiene habilitado el flag de Medio de
          Pago en el Mantenimiento de Plan de Cuentas; este código debe estar
          registrado en la Tabla General S1.
        </li>
        <li>
          Columna Z - Tipo de Documento de Referencia: En este campo se
          ingresará un tipo de documento de referencia sólo cuando se ingresa un
          Documento de Tipo “NA” o “ND”. Este valor debe estar registrado en la
          Tabla General 06.
        </li>
        <li>
          Columna AA - Número de Documento Referencia: En esta columna se
          ingresa el número (incluido la serie) del Documento de Referencia,
          sólo cuando se ingresa un Documento de Tipo “NA” o “ND”.
        </li>
        <li>
          Columna AB - Fecha Documento Referencia: Se ingresa la fecha del
          documento de referencia, sólo cuando se ingresa un Documento de Tipo
          “NA” o “ND”. Debe ser una fecha válida con formato “DD/MM/AAAA”.
        </li>
        <li>
          Columna AC - Base Imponible Documento Referencia: En esta columna se
          ingresa la base imponible del documento de Referencia, sólo cuando se
          ingresa un Documento de Tipo “NA” o “ND”. Este valor debe estar
          comprendido entre {">"}=0 y {"<"}=99999999999.99”.
        </li>
        <li>
          Columna AD - IGV Documento Provisión: En esta columna se ingresa el
          IGV del documento de referencia, sólo cuando se ingresa un Documento
          de Tipo “NA” o “ND”. Este valor debe estar comprendido entre {">"}=0 y{" "}
          {"<"}=99999999999.99”.
        </li>
        <li>
          Columna AE - Tipo Referencia en estado MQ: En esta columna se ingresa
          el código “MQ”, sólo cuando se quiere informar sobre la máquina
          registradora. En la columna de tipo de documento debe estar definido
          con documento tipo TK.
        </li>
        <li>
          Columna AF - Número Serie Caja Registradora: En esta columna se
          ingresa la serie de la máquina registradora, sólo cuando en tipo de
          Referencia se ingresa el código “MQ” y el tipo de documento es TK.
        </li>
        <li>
          Columna AG - Fecha de Operación: En esta columna se ingresa la fecha
          de operación, sólo cuando se quiere informar sobre la máquina
          registradora. En la columna de tipo de documento debe estar definido
          con el tipo de documento TK. Debe de consignarse una fecha válida con
          formato DD/MM/AAAA.
        </li>
        <li>
          Columna AH - Tipo de Tasa: En esta columna se ingresa el tipo de tasa
          de detracción o Percepción. Si la cuenta contable se hubiera
          configurado en el ítem Tasa 1 (Detracción) o en el ítem 2
          (Percepción). Estos tipos de tasas deben estar registrados en la Tabla
          General 28 - Detracción o en la 29-Percepción.
        </li>
        <li>
          Columna AI - Tasa Detracción/Percepción: En esta columna se ingresa la
          tasa porcentual correspondiente al tipo de tasa de detracción o
          percepción. Sólo si la cuenta contable se hubiera configurado en el
          ítem tasa 1 (Detracción) o 2 (Percepción). Estos valores deben estar
          comprendidos entre {">"}=0 y {"<"}=999.99.
        </li>
        <li>
          Columna AJ - Importe Base Detracción/Percepción Dólares: En esta
          columna se ingresa el importa base de detracción o percepción
          expresados en dólares. Sólo si la cuenta contable se hubiera
          configurado en el ítem tasa 1 (Detracción) o 2 (Percepción). Estos
          valores deben estar comprendido entre {">"}=0 y {"<"}=99999999999.99.
        </li>
        <li>
          Columna AK - Importe Base Detracción/Percepción Soles: En esta columna
          se ingresa el importa base de detracción o percepción expresados en
          soles. Sólo si la cuenta contable se hubiera configurado en el ítem
          tasa 1 (Detracción) o 2 (Percepción). Estos valores deben estar
          comprendido entre {">"}=0 y {"<"}=99999999999.99.
        </li>
      </ul>
      <p>
        En cada línea de información se distribuye como sigue: Las primeras 9
        columnas (A hasta J), contiene información para la cabecera del
        comprobante (las cuales se van a repetir en cada línea correspondiente
        al detalle del comprobante) y las columnas restantes contiene la
        información para el detalle de comprobante (K hasta AK).
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_6_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={1000}
        height={1000}
      />
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_7_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={1000}
        height={1000}
      />
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_8_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={1000}
        height={1000}
      />
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_9_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={1000}
        height={1000}
      />
      <h1 className="font-bold">
        Proceso de Validación de Archivo de Carga de Excel
      </h1>
      <p>
        Este proceso sólo valida el contenido del archivo de carga de Excel; al
        finalizar muestra en el resultado de la operación (Si tuvo
        inconsistencias o no). Al ejecutar el proceso de “Carga de Comprobante
        desde Excel”, el usuario ubicará el archivo en el formato de Excel con
        el contenido de los comprobantes, luego dar clic en el botón
        “Validación”.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_10_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        Si al realizar las validaciones no se hubieran encontrado
        inconsistencias, el proceso mostrará la siguiente ventana de resultados,
        donde indica la cantidad de Comprobante Válidos y el comentario de “OK”.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_11_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        Si el proceso encontrara algunas inconsistencias, mostrará los
        siguientes mensajes:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_12_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        Informará la cantidad de comprobantes inconsistentes, mostrando un
        mensaje de error en la columna producida, el valor faltante o el valor
        errado y las filas donde se produjeron.
      </p>
      <p>
        Para superar dichas inconsistencias, el usuario deberá abrir el archivo
        de Excel y realizar las modificaciones en las columnas y filas
        correspondientes.
      </p>
      <p>
        Al dar clic en el botín “Imprimir”, el proceso imprimirá el contenido de
        la ventana de resultados, tal como se muestra en la siguiente pantalla:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_13_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <h1 className="font-bold">
        Proceso de Importación de Archivo de Carga de Excel
      </h1>
      <p>
        En este proceso se ejecuta la validación y al final si todo está
        conforme recién se procede a grabar los comprobantes en las tablas
        correspondientes.
      </p>
      <p>
        Al ejecutar el proceso de “Carga de Comprobante desde Excel”, el usuario
        ubicará el archivo en el formato de Excel con el contenido de los
        comprobantes, luego dar clic en el botón “Importar”.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_14_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        Si no existieran inconsistencias en la información del archivo de Excel
        a cargar, el proceso grabará los comprobantes, mostrando un resumen de
        la cantidad de comprobantes válidos (grabados), finalizados y
        pendientes.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_15_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        Ingresar a Consulta Situación de Comprobantes para revisar el
        comprobante generado:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_16_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        Ejecutamos el proceso de Carga de Comprobantes, donde se está informando
        4 comprobantes (los que se muestra en el ejemplo del Registro de
        comprobantes en el formato del archivo del Excel), en esta ocasión se
        está desactivando el check de “Respetar numeración de comprobantes”,
        damos clic en el botón “Importar”.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_17_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        Al finalizar el proceso (si lo informado en la hoja de Excel está Ok),
        mostrará la estadísticas del proceso, además informará los comprobantes
        generados con su situación.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_18_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        Ingresar a Consulta Situación de Comprobantes; en este caso se muestra
        la tasa de detracción informada:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_19_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        En el siguiente caso, se informó el documento de referencia de la Nota
        de Abono (Crédito):
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_20_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        En este último caso, se informa los datos de la máquina registradora
        para una venta con Ticket:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_21_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <Table items={data} />
    </div>
  );
};

export default MovimientoDatos;
