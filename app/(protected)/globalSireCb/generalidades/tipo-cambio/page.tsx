import TablaDocumentosRelacionados from "@/components/TablaDocumentosRelacionados";
import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Mantenimiento Masivo de Tipo de Cambio",
      href: "https://miconcar.com/uploads/documentos/41_4.04._CONCAR_CB_Mantenimiento_Masivo_de_Tipo_de_Cambio_041-D000381.pdf",
    },
  ];
  const data2 = [
    {
      id: 1,
      title: "Archivo (Base de datos)",
      description:
        "El módulo de Archivos permite efectuar el mantenimiento y consulta de las bases de datos del sistema.",
      href: "/globalSireCb/generalidades/archivos",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        El Tipo de Cambio es el precio que tiene una moneda extranjera en el
        mercado nacional.
      </p>
      <p>
        En la opción Mantenimiento de tipo de cambio, se registrará el valor que
        corresponda al tipo de cambio compra y venta, utilizando la moneda US
        para cada día del mes. Del mismo modo, se registrará el tipo de cambio
        para el último día de cada mes utilizando la moneda UZ.
      </p>
      <p>
        Estos datos serán usados por el sistema para convertir cada asiento
        contable a moneda nacional y dólares según corresponda a la moneda
        utilizada en cada comprobante contable.
      </p>
      <p>
        Es obligatorio registrar en moneda UZ, el tipo de cambio del último día
        (30 o 31) del mes cuyo cierre contable se desea procesar, éstos valores
        serán utilizados para el proceso de Ajuste por Diferencia de Cambio
        FASB52.
      </p>
      <h1 className="font-bold">4.4.1 Mantenimiento Tipo de Cambio</h1>
      <p>
        En esta pantalla deberá registrar los tipos de cambio de compra y venta
        como requisito indispensable para ingresar asientos contables.
      </p>
      <p>
        <span className="font-bold">A partir de la versión 2015.02</span> podrá
        contar con la actualización en línea de datos desde el portal de SUNAT,
        para ello debe realizar la activación del servicio según indica en el
        instructivo Activa Consulta en línea de SUNAT.
      </p>
      <Image
        alt="1"
        src="https://miconcar.com/uploads/documentos/concar_cb_c1_1_v2015_02_Tipo_de_Cambio_img1_v1_.PNG"
        width={650}
        height={500}
      />
      <p>
        MONEDA: Seleccionar la moneda US para ingresar el tipo de cambio del
        día.
      </p>
      <p>
        {" "}
        Seleccionar la moneda UZ para ingresar el tipo de cambio de cierre
        mensual o anual.
      </p>
      <p>AÑO/ MES: Digitar el año/mes a 2 dígitos</p>
      <p>
        DÍA: Si la moneda seleccionada es US, digitar el día desde 01 hasta 31
        según corresponda.
      </p>
      <p> Si la moneda seleccionada es UZ, digitar el último día del mes.</p>
      <p>
        CAMBIO COMPRA: Con la consulta en línea de Sunat activa, éste dato se
        actualizará automáticamente luego de presionar ENTER en el día, de lo
        contrario deberá digitar el tipo de cambio de compra. En el registro de
        comprobantes, el sistema tomará este valor al seleccionar el tipo de
        conversión (M)
      </p>
      <p>
        CAMBIO VENTA: Con la consulta en línea de Sunat activa, éste dato se
        actualizará automáticamente luego de presionar ENTER en el día, de lo
        contrario deberá digitar el tipo de cambio de venta. En el registro de
        comprobantes, el sistema tomará este valor al seleccionar tipo de
        conversión (V)
      </p>
      <p>
        NOTA: Para los días que Sunat no publica el tipo de cambio, el usuario
        deberá digitar los valores del último día publicado de forma manual, de
        igual manera, en caso no cuente con servicio de internet.
      </p>
      <h1 className="font-bold">4.4.2 Emisión Tipo de Cambio</h1>
      <p>
        En esta opción podrá emitir un reporte de los tipos de cambio ingresados
        a una fecha determinada.
      </p>
      <Image
        alt="1"
        src="https://miconcar.com/uploads/documentos/concar_cb_c1_1_v2015_02_Tipo_de_Cambio_img2_v1_.PNG"
        width={650}
        height={500}
      />
      <p>En esta pantalla se podrá:</p>
      <div className="flex items-center justify-start">
        <Image
          alt="2"
          src="https://miconcar.com/uploads/documentos/concar_cb_c1_1_v2015_02_Tipo_de_Cambio_img4_v1_1.PNG"
          width={50}
          height={50}
        />
        <p>
          A IMPRESORA (Alt-I) Emitirá el reporte directamente en la impresora
          predeterminada.
        </p>
      </div>
      <div className="flex items-center justify-start">
        <Image
          alt="3"
          src="https://miconcar.com/uploads/documentos/concar_cb_c1_1_v2015_02_Tipo_de_Cambio_img5_v1_1.PNG"
          width={50}
          height={50}
        />
        <p>
          A PANTALLA (Alt-P) Mostrará el reporte en la pantalla del equipo, tal
          y como se emitirá posteriormente.
        </p>
      </div>
      <div className="flex items-center justify-start">
        <Image
          alt="4"
          src="https://miconcar.com/uploads/documentos/concar_cb_c1_1_v2015_02_Tipo_de_Cambio_img6_v1_.PNG"
          width={50}
          height={50}
        />
        <p>
          GUARDAR COMO (Alt-G) Guardará el reporte en formato de texto en la
          carpeta de su elección.
        </p>
      </div>
      <Image
        alt="5"
        src="https://miconcar.com/uploads/documentos/concar_cb_c1_1_v2015_02_Tipo_de_Cambio_img3_v1_1.PNG"
        width={650}
        height={500}
      />
      <Table items={data} />
      <TablaDocumentosRelacionados items={data2} />
    </div>
  );
};

export default page;
