import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Modelo_carga_comprobantes_doc_detraccion_",
      href: "https://miconcar.com/uploads/documentos/131_Carga_de_comprobantes_desde_xls_detraccion.pdf.xls",
    },
    {
      id: 1,
      title: "Modelo_carga_comprobantes_nc_",
      href: "https://miconcar.com/uploads/documentos/131_Carga_de_comprobantes_desde_xls_nota_credito.pdf.xls",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Esta opción permite transferir el plan de cuentas, tabla de anexos,
        tipos de cambio y tablas generales a archivos que se pueden guardar en
        el disco duro o en una memoria USB. Es muy útil en el caso de que se
        lleve la contabilidad en dos computadoras separadas y se quiera utilizar
        la misma configuración de tablas.
      </p>
      <p>Seleccionada la opción el sistema mostrará la siguiente pantalla:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_13_transfiere_plan_de_cuentas_y_anexos_a_disco_.jpg"
        alt="Transferir datos"
        width={500}
        height={400}
      />
      <p>Seleccionar la Unidad y Carpeta de destino.</p>
      <div className="flex space-x-2">
        {" "}
        <p>Presionar el botón </p>
        <Image
          src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_13_transfiere_.jpg"
          alt="Transferir datos"
          width={50}
          height={50}
        />
      </div>
      <p>
        Genera los siguientes archivos donde el 31 es el código de la compañía:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_13_archivos_31_cod_cia_.jpg"
        alt="Transferir datos"
        width={500}
        height={400}
      />
      <h1 className="font-bold">12.13.2 Carga Anexos</h1>
      <p>
        Esta opción permite cargar al sistema los anexos de otra PC con CONCAR
        Monousuario o también desde otra compañía renombrando por Windows el
        archivo con el código de la compañía en el archivo CANXX.dbf.
        Seleccionada la opción el sistema mostrará la siguiente pantalla:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_13_carga_de_anexos_a_disco_.jpg"
        alt="Transferir datos"
        width={500}
        height={400}
      />
      <p>
        En parte izquierda seleccionar la unidad y carpeta donde está el archivo
        CANXX.dbf (XX= código de compañía en 2 dígitos). En derecha deberá
        aparecer el archivo a cargar.
      </p>
      <div className="flex space-x-2">
        {" "}
        <p>Presionar el botón </p>
        <Image
          src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_13_cargar_.jpg"
          alt="Transferir datos"
          width={50}
          height={50}
        />
      </div>
      <h1 className="font-bold">12.13.3 Transferencia de Comprobantes</h1>
      <p>
        Esta opción permite transferir por mes o por subdiario los comprobantes
        contables de una compañía y ejercicio específico a archivos que se
        pueden guardar en el disco duro o en una memoria USB.
      </p>
      <p>
        Es muy útil en el caso de que se lleve la contabilidad en dos
        computadoras separadas y se quiera transferir un grupo de asientos
        contables de una a otra.
      </p>
      <p>Seleccionada la opción el sistema mostrará la siguiente pantalla:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_13_transferir_comprobantes_.jpg"
        alt="Transferir datos"
        width={500}
        height={400}
      />
      <p>Ingresar:</p>
      <p>MES A TRANSFERIR: Si se elige esta opción ingresar número de mes.</p>
      <p>
        SUB – DIARIO: Si se elige esta opción ingresar los siguientes datos:
      </p>
      <p>
        COMPROBANTE INICIAL/FINAL: Elegir con Shift + F1 el rango de
        comprobantes a transferir.
      </p>
      <div className="flex space-x-2">
        {" "}
        <p>Presionar el botón </p>
        <Image
          src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_13_transferir_.jpg"
          alt="Transferir datos"
          width={50}
          height={50}
        />
      </div>
      <p>
        Se generan dos archivos .dbf con las cabeceras y detalles de
        comprobantes donde el 31 es el código de la compañía y el 13 el año en
        dos dígitos:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_13_generacion__de_dos_archivos_.jpg"
        alt="Transferir datos"
        width={500}
        height={400}
      />
      <h1 className="font-bold">12.13.4 Carga de Comprobantes</h1>
      <p>
        Esta opción permite adicional comprobantes contables originados por la
        opción de Transferencia de Comprobantes del CONCAR o por archivos
        externos generados por una interfaz de acuerdo a las especificaciones
        para su elaboración.
      </p>
      <p>Seleccionada la opción el sistema mostrará la siguiente pantalla:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_13_carga_de_comprobantes_de_dk_.jpg"
        alt="Transferir datos"
        width={500}
        height={400}
      />
      <p>Donde:</p>
      <p>
        CC000213.dbf y CD000213.dbf son archivos generados desde la interfaz de
        carga de asientos desde otros sistemas que corresponden a la compañía
        código 0002 y al ejercicio 2013.
      </p>
      <p>
        CTC0213.dbf y CTD0213.dbf son archivos generados desde la opción de
        Transferencia de Comprobantes* del CONCAR que corresponden a la compañía
        código 0002 y al ejercicio 2013.
      </p>
      <div className="flex space-x-2">
        {" "}
        <p>Presionar el botón </p>
        <Image
          src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_13_carga_.jpg"
          alt="Transferir datos"
          width={50}
          height={50}
        />
      </div>
      <h1 className="font-bold">
        12.13.5 Cambio Códigos Detracción a 5 dígitos
      </h1>
      <p>
        Esta opción permitió cambiar los códigos antiguos de detracción de 3
        dígitos a los nuevos de 5 dígitos en la tabla general y en comprobantes
        contables. Seleccionada la opción el sistema mostrará la siguiente
        pantalla:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_13_actualizacion_codigos_de_detraccion_a_5_digitos_.jpg"
        alt="Transferir datos"
        width={500}
        height={500}
      />
      <div className="flex space-x-2">
        {" "}
        <p>Presionar el botón </p>
        <Image
          src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_13_actualizar_.jpg"
          alt="Transferir datos"
          width={50}
          height={50}
        />
      </div>
      <h1 className="font-bold">12.13.6 Carga Tabla Datos PDT Honorarios</h1>
      <p>
        Esta opción permite cargar las tablas de la Planilla Electrónica. Para
        ello se debe tener un archivo llamado PLANILLA.dbf.
      </p>
      <p>Seleccionada la opción el sistema mostrará la siguiente pantalla:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_13_importacion_tablas_generales_de_la_planilla_electronica_.jpg"
        alt="Transferir datos"
        width={500}
        height={500}
      />
      <div className="flex space-x-2">
        {" "}
        <p>Ubicar la ruta donde está el archivo mencionado con el botón </p>
        <Image
          src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_13_boton_buscar_1_.jpg"
          alt="Transferir datos"
          width={50}
          height={50}
        />
      </div>
      <div className="flex space-x-2">
        {" "}
        <p>Presionar el botón </p>
        <Image
          src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_13_boton_ejecutar_migracion_.jpg"
          alt="Transferir datos"
          width={50}
          height={50}
        />
      </div>
      <h1 className="font-bold">
        12.13.7 Transferencia Saldos Balance a TXT (Cobra)
      </h1>
      <p>Esta opción no es de uso general.</p>
      <h1 className="font-bold">12.13.8 Carga de comprobantes desde Excel</h1>
      <p>
        Proceso que carga los comprobantes registrados en una hoja de Excel (con
        las versiones .xls o xlsx) bajo un formato establecido. Tomar en cuenta
        que si está trabajando con la versión de redes (multiusuario) ningún
        otro usuario debe de estar trabajando en el Concar.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_cb_exc_1_.jpg"
        alt="Transferir datos"
        width={500}
        height={500}
      />
      <p>Donde:</p>
      <ul className="list-disc px-5">
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
          exista inconsistencias.
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
      <h1 className="font-bold">Estructura formato del Archivo de Excel:</h1>
      <p>
        Al abrir el formulario de “Carga de comprobante desde Excel”, dar clic
        en el botón “Exportar Formato”, nos genera el siguiente archivo de
        Excel:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_cb_exc_2_.jpg"
        alt="Transferir datos"
        width={1000}
        height={1000}
      />
      <Image
        src="https://miconcar.com/uploads/documentos/concar_cb_exc_3_.jpg"
        alt="Transferir datos"
        width={1000}
        height={1000}
      />
      <Image
        src="https://miconcar.com/uploads/documentos/concar_cb_exc_4_.jpg"
        alt="Transferir datos"
        width={1000}
        height={1000}
      />
      <Image
        src="https://miconcar.com/uploads/documentos/concar_cb_exc_5_.jpg"
        alt="Transferir datos"
        width={500}
        height={500}
      />
      <p>Mostrándose las siguientes columnas:</p>
      <ul className="list-disc px-5">
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
          olumna U - Fecha de Vencimiento, En esta columna se ingresa una fecha
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
      <p>
        Ejemplo del registro de comprobantes en el formato del archivo del
        Excel.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/excel1.gif"
        alt="Transferir datos"
        width={1000}
        height={1000}
      />
      <Image
        src="https://miconcar.com/uploads/documentos/excel_2.jpg"
        alt="Transferir datos"
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
        src="https://miconcar.com/uploads/documentos/concar_cb_exc_10_.jpg"
        alt="Transferir datos"
        width={650}
        height={650}
      />
      <p>
        Si al realizar las validaciones no se hubieran encontrado
        inconsistencias, el proceso mostrará la siguiente ventana de resultados,
        donde indica la cantidad de Comprobante Válidos y el comentario de “OK”.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_cb_exc_11_.jpg"
        alt="Transferir datos"
        width={650}
        height={650}
      />
      <p>
        Si el proceso encontrara algunas inconsistencias, mostrará los
        siguientes mensajes:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_cb_exc_12_.jpg"
        alt="Transferir datos"
        width={650}
        height={650}
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
        src="https://miconcar.com/uploads/documentos/concar_cb_exc_13_.jpg"
        alt="Transferir datos"
        width={650}
        height={650}
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
        src="https://miconcar.com/uploads/documentos/concar_cb_exc_14_.jpg"
        alt="Transferir datos"
        width={650}
        height={650}
      />
      <p>
        Si no existieran inconsistencias en la información del archivo de Excel
        a cargar, el proceso grabará los comprobantes, mostrando un resumen de
        la cantidad de comprobantes válidos (grabados), finalizados y
        pendientes.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_cb_exc_15_.jpg"
        alt="Transferir datos"
        width={650}
        height={650}
      />
      <p>
        Ingresar a Consulta Situación de Compronbantes para revisar el
        comprobante generado
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/DOC50.jpg"
        alt="Transferir datos"
        width={650}
        height={650}
      />
      <p>
        Ejecutamos el proceso d Carga de Comprobantes, donde se está informando
        3 comprobantes (los que se muestra en el ejemplo del Registro de
        comprobantes en el formato del archivo del Excel), en esta ocasión se
        está desactivando el check de “Respetar numeración de comprobantes”,
        damos clic en el botón “Importar”.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_cb_exc_17_.jpg"
        alt="Transferir datos"
        width={650}
        height={650}
      />
      <p>
        Al finalizar el proceso (si lo informado en la hoja de Excel está Ok),
        mostrará la estadísticas del proceso, además informará los comprobantes
        generados con su situación.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/DOC611.jpg"
        alt="Transferir datos"
        width={650}
        height={650}
      />
      <p>
        Ingresar a Consulta Situación de Comprobantes. En el primer caso
        mostramos el comprobante con la información del detalle informado.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/DOC501.jpg"
        alt="Transferir datos"
        width={650}
        height={650}
      />
      <p>
        En este segundo caso, se informa los datos de la máquina registradora
        para una venta con Ticket:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/1.jpg"
        alt="Transferir datos"
        width={650}
        height={650}
      />
      <Image
        src="https://miconcar.com/uploads/documentos/2.png"
        alt="Transferir datos"
        width={650}
        height={650}
      />
      <p>
        En el ùltimo caso, se informó el documento de referencia de la Nota de
        Abono (Crédito):
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/3.jpg"
        alt="Transferir datos"
        width={650}
        height={650}
      />
      <Table items={data} />
    </div>
  );
};

export default page;
