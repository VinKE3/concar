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
      <h1 className="font-bold">
        Registro de Omisiones para Libro Diario y Mayor
      </h1>
      <p>
        Esta opción permite incluir asientos omitidos en meses anteriores en el
        libro Diario y Mayor. Para poder incluir asientos en esta opción es
        NECESARIO que el comprobante contable omitido se registre en el MES EN
        QUE SE VA A REGUALIZAR su omisión.
      </p>
      <p>
        Para realizar este registro ingresar a cualquiera de las siguientes
        opciones:
      </p>
      <p>
        Reportes/ Diarios/ Libros Electrónicos/ Registros Omisiones para Libros
        Diario y Mayor PLE
      </p>
      <p>
        Reportes/ Mayores/ Libros Electrónicos/ Registro Omisiones para Libros
        Diario y Mayor PLE
      </p>
      <p>El sistema mostrará la siguiente pantalla:</p>

      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_libros_electronicos_diario_mayor_.jpg"
        width={650}
        height={650}
      />
      <p>Ingresar:</p>
      <p>
        Indique Mes a Informar: Seleccionar el mes en que se va a regularizar la
        omisión de un mes anterior ya enviado.
      </p>
      <p>Clic al botón Nuevo Registro de Omisión</p>
      <p>El sistema mostrará la siguiente pantalla:</p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_libros_electronicos_diario_mayor_1_.jpg"
        width={650}
        height={650}
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
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_libros_electronicos_diario_mayor_2_.jpg"
        width={650}
        height={650}
      />
      <p>Clic en Aceptar</p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_libros_electronicos_diario_mayor_3_.jpg"
        width={650}
        height={650}
      />
      <h1 className="font-bold">
        Generación de Archivos Libros Diario y Mayor para SUNAT
      </h1>
      <p>
        Para realizar este registro ingresar a cualquiera de las siguientes
        opciones:
      </p>
      <p>
        Reportes/ Diarios/ Libros Electrónicos/ Generador Libros Electrónicos
        Diario y Mayor
      </p>
      <p>
        Reportes/ Mayores/ Libros Electrónicos/ Generador Libros Electrónicos
        Diario y Mayor
      </p>
      <p>
        Para ello se debe haber generado previamente el Libro de compras y
        ventas.En ambas opciones el sistema muestra 2 alternativas: PLE 4.0 y el
        5.0. Se muestra como ejemplo en pantalla el PLE 4.0:
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concarcb_libroselectronicos142.jpg"
        width={650}
        height={650}
      />
      <p>Mes de Proceso: El sistema toma el último mes consolidado.</p>
      <p>Ingresar:</p>
      <p>MONEDA: Seleccionar MN soles o US Dólares.</p>
      <p>GLOSA A IMPRIMIR: Seleccionar entre Principal o Movimientos</p>
      <p>LIBRO(S) A GENERAR Y CUENTAS DE ORDEN:</p>
      <p>a. Emitir el/los archivo/s dando clic al botón “Generar en TXT”</p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_libros_electronicos_diario_mayor_5_.jpg"
        width={250}
        height={250}
      />
      <p>b. Puede habilitar la casilla de “Considera Cuentas de Orden”.</p>
      <p>DETALLE DEL PLAN CONTABLE UTILIZADO – LIBRO DIARIO</p>
      <p>
        Esta opción permite la creación del formato 5.3 Libro Diario – Detalle
        del Plan Contable Utilizado requerido para la carga del Libro Diario
        Electrónico.
      </p>
      <p>Puede elegir entre:</p>
      <ul className="list-disc px-5">
        <li>
          Crear Formato 5.3 Libro Diario: esta opción crea el archivo del plan
          contable con todas las cuentas.
        </li>
        <li>
          Crear Formato 5.3 Sin Información: esta opción crea el archivo del
          plan contable vacío. Se utiliza después del primer envío o después del
          mes de enero de cada año cuando no ha habido modificaciones en las
          cuentas del plan contable.
        </li>
        <li>
          NO Crear Formato 5.3: si selecciona esta opción el proceso no creará
          el archivo del plan contable utilizado.
        </li>
      </ul>
      <p>
        DETALLE DEL PLAN CONTABLE UTILIZADO – LIBRO DIARIO DE FORMATO
        SIMPLIFICADO
      </p>
      <p>
        Esta opción permite la creación del formato 5.4 Libro Diario
        Simplificado – Detalle del Plan Contable Utilizado requerido para la
        carga del Libro Diario Simplificado Electrónico.
      </p>
      <p>Puede elegir entre:</p>
      <ul className="list-disc px-5">
        <li>
          Crear Formato 5.4: esta opción crea el archivo del plan contable con
          todas las cuentas.
        </li>
        <li>
          Crear Formato 5.4 Sin Información: esta opción crea el archivo del
          plan contable vacío. Se utiliza después del primer envío o después del
          mes de enero de cada año cuando no ha habido modificaciones en las
          cuentas del plan contable.
        </li>
        <li>
          NO Crear Formato 5.4: si selecciona esta opción el proceso no creará
          el archivo del plan contable utilizado.
        </li>
      </ul>
      <p>Para generar el archivo a cargar en el PLE de Sunat clic en</p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_libros_electronicos_diario_mayor_6_.jpg"
        width={100}
        height={100}
      />
      <p>
        El sistema mostrará una ventana donde solicitará una ubicación para
        grabar cada archivo una vez que este sea generado:
      </p>
      <p>Archivo txt Fomato 5.1 – Libro Diario</p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_libros_electronicos_diario_mayor_7_.jpg"
        width={650}
        height={650}
      />
      <p>Clic en Guardar</p>
      <p>Archivo txt Fomato 6.1 – Libro Mayor</p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_libros_electronicos_diario_mayor_8_.jpg"
        width={650}
        height={650}
      />
      <p>Archivo txt Fomato 5.3 – Detalle del Plan Contable utilizado</p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_libros_electronicos_diario_mayor_9_.jpg"
        width={650}
        height={650}
      />
      <p>
        Libro Diario Simplificado, el sistema muestra 2 opciones: el PLE 4.0 y
        el 5.0. Se muestra como ejemplo en pantalla el PLE 4.0:
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concarcb_libroselectronicos161.jpg"
        width={650}
        height={650}
      />
      <p>Clic en</p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_libros_electronicos_diario_mayor_6_.jpg"
        width={100}
        height={100}
      />
      <p>
        Generará los archivos para los formatos 5.2 Libro Diario de Formato
        Simplificado y 5.4 Detalle del Plan Contable utilizado para Libro de
        Formato Simplificado.
      </p>
      <p>Para generar el archivo en Excel clic en</p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_libros_electronicos_diario_mayor_11_1.jpg"
        width={100}
        height={100}
      />
      <p>
        {" "}
        El sistema generará una hoja Excel con la misma información contenida en
        el TXT para su revisión.
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_libros_electronicos_diario_mayor_12_.jpg"
        width={650}
        height={650}
      />
      <p>
        Finalmente, en todos los casos, el sistema generará un reporte de
        información generada:
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_libros_electronicos_diario_mayor_13_.jpg"
        width={650}
        height={650}
      />
    </div>
  );
};

export default page;
