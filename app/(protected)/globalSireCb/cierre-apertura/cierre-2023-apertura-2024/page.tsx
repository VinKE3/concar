import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Guía de Usuario Cierre 2019 y Apertura 2020",
      href: "https://miconcar.com/uploads/documentos/1032_Guia_de_Usuario_Cierre_2019_y_Apertura_2020_Concar_CB_V5.pdf",
    },
    {
      id: 2,
      title: "Guía de Usuario Cierre 2020 y Apertura 2021",
      href: "https://miconcar.com/uploads/documentos/1032_Guia_de_Usuario_Cierre_2020_y_Apertura_2021.pdf",
    },
    {
      id: 3,
      title: "Guia de Usuario Cierre 2022 y Apertura 2023",
      href: "https://miconcar.com/uploads/documentos/1032_1032_Guia_de_Usuario_Cierre_2022_y_Apertura_2023.pdf",
    },
    {
      id: 4,
      title: "PPT Cierre 2021 y Apertura 2022 - I",
      href: "https://miconcar.com/uploads/documentos/1032_Cierre_2021_Y_Apertura_Contable_2022_con_Concar_CB_I.pdf",
    },
    {
      id: 5,
      title: "PPT Cierre 2021 y Apertura 2022 -II",
      href: "https://miconcar.com/uploads/documentos/1032_Cierre_2021_Y_Apertura_Contable_2022_con_Concar_CB_II1.pdf",
    },
    {
      id: 6,
      title: "PPT Cierre 2021 y Apertura 2022-III",
      href: "https://miconcar.com/uploads/documentos/1032_Cierre_2021_Y_Apertura_Contable_2022_con_Concar_CB_III.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Hemos elaborado una guía para el Cierre Contable 2022 y el Asiento de
        Apertura 2023, con la finalidad de facilitar el uso del sistema
        contemplando todos los posibles casos.
      </p>
      <p>
        En la presente guía, hemos incluido pautas para este proceso, antes y
        durante el Proceso de Cierre. Adicional a ello, a partir del ejercicio
        2020 podrá utilizar la opción de Asiento de apertura del menú “Nuevo
        PCGE”.
      </p>
      <p>
        Debe tener en cuenta que antes de realizar cualquier acción, debe seguir
        las siguientes recomendaciones:
      </p>
      <p>a. Generar copia de seguridad.</p>
      <p>b. Ir a Utilitarios:</p>
      <p> Reindexar base de datos Principales.</p>
      <p>Reindexar base de datos Movimientos.</p>
      <p>Reindexar base de datos Mensuales.</p>
      <p>Reindexar base de datos Comunes.</p>
      <h1 className="font-bold">
        El contenido de esta guía se divide en dos partes:
      </h1>
      <h1 className="font-bold">Tema 1: Pasos previos al Proceso de Cierre</h1>
      <div className="px-10">
        <p>Paso 01. Asientos de Gastos y Provisiones.</p>
        <p>Paso 02. Asiento Costo de Ventas y producción.</p>
        <p>
          Paso 03. Revisión de Doc. Pendientes, Proceso de Consolidación y
          Análisis de Cuentas
        </p>
        <p>Paso 04. Regularización Diferencia de Cambio.</p>
        <p> Paso 05. Ajuste Diferencia de cambio FASB 52.</p>
        <p>Paso 06. Emisión de EEFF antes de impuestos – Cuadre Resultados.</p>
        <p>Paso 07. Reportes a imprimir antes del cierre.</p>
        <p>Paso 08. Configuración Tablas de Cierre</p>
      </div>
      <h1 className="font-bold">Tema 2: Pasos durante al Proceso de Cierre</h1>
      <div className="px-10">
        <p>Paso 09. Registro Asiento Cancelación Costo de Venta.</p>
        <p>Paso 10. Registro Manual de Asientos 0013 y 0014.</p>
        <p>
          Paso 11. Generación de los 16 asientos de cierre y Consolidación
          Definitiva al Mes de Diciembre 2022
        </p>
        <p>Paso 12. Generar Asiento de Apertura 2023.</p>
        <p> Paso 05. Ajuste Diferencia de cambio FASB 52.</p>
        <p>
          Paso 13. Reapertura Mes Contable, Generación del último asiento de
          Cierre número 0017 y Bloqueo del periodo 2022.
        </p>
        <p>
          Paso 14. Emisión de Libros Diario y Mayor del mes de Diciembre 2022.
        </p>
      </div>
      <p>
        A continuación podras visualizar los videos donde explicamos a detalle
        el funcionamiento de cada paso:{" "}
      </p>
      <h1 className="font-bold">
        Importante: Para el ejemplo de los videos estamos considerando Cierre
        2019 y Apertura 2020 el proceso es igual para todos los ejercicios.{" "}
      </h1>
      <p>TEMA 1: PASOS PREVIOS AL PROCESO DE CIERRE</p>
      <p>Introducción</p>
      <div className="px-6 md:w-[45rem] h-96 lg:h-100%  mr-auto mb-10">
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/276-LwY4pG4?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <p>Paso 01. Asientos de Gastos y Provisiones</p>
      <div className="px-6 md:w-[45rem] h-96 lg:h-100%  mr-auto mb-10">
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/a_816UMja_w?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <p>Paso 02. Asiento Costo de Ventas y producción</p>
      <div className="px-6 md:w-[45rem] h-96 lg:h-100%  mr-auto mb-10">
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Q2Gkvj67ikA?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <p>
        Paso 03. Revisión de Doc. Pendientes, Consolidación y Análisis de
        Cuentas
      </p>
      <div className="px-6 md:w-[45rem] h-96 lg:h-100%  mr-auto mb-10">
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/J9ZA3Bc2JXc?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <p>Paso 04. Regularización Diferencia de Cambio</p>
      <div className="px-6 md:w-[45rem] h-96 lg:h-100%  mr-auto mb-10">
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ranaRTsOZ1w?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <p>Paso 05. Ajuste Diferencia de cambio FASB 52</p>
      <div className="px-6 md:w-[45rem] h-96 lg:h-100%  mr-auto mb-10">
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/RyiaBecPqRY?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <p>Paso 06. Emisión de EEFF antes de impuestos – Cuadre Resultados</p>
      <div className="px-6 md:w-[45rem] h-96 lg:h-100%  mr-auto mb-10">
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/bqbDQXmPq9E?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <p>Paso 07. Reportes a imprimir antes del cierre</p>
      <div className="px-6 md:w-[45rem] h-96 lg:h-100%  mr-auto mb-10">
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/y6tymor1-IQ?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <p>Paso 08. Configuración Tablas de Cierre</p>
      <div className="px-6 md:w-[45rem] h-96 lg:h-100%  mr-auto mb-10">
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/7DGawZ18f1o?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <p>TEMA 2: PASOS DURANTE EL PROCESO DE CIERRE</p>
      <p>Introducción</p>
      <div className="px-6 md:w-[45rem] h-96 lg:h-100%  mr-auto mb-10">
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/XtlFJYk5p50?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <p>Paso 09. Registro Asiento Cancelación Costo de Venta</p>
      <div className="px-6 md:w-[45rem] h-96 lg:h-100%  mr-auto mb-10">
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/QoK2r70TyyU?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <p>Paso 10. Registro Manual de Asientos 0013 y 0014</p>
      <div className="px-6 md:w-[45rem] h-96 lg:h-100%  mr-auto mb-10">
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/tRy60hb0KwE?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <p>
        Paso 11. Generación 16 asientos de cierre y Consolidación Definitiva a
        Diciembre 2019
      </p>
      <div className="px-6 md:w-[45rem] h-96 lg:h-100%  mr-auto mb-10">
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ACXTKQjUumY?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <p>Paso 12. Generar Asiento de Apertura 2020</p>
      <div className="px-6 md:w-[45rem] h-96 lg:h-100%  mr-auto mb-10">
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ACXTKQjUumY?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <p>
        Paso 13. Reapertura Mes, Generación último asiento de Cierre y Bloqueo
        periodo 2019
      </p>
      <div className="px-6 md:w-[45rem] h-96 lg:h-100%  mr-auto mb-10">
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/NyOY_lzhx78?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <p>Paso 14. Emisión de Libros Diario y Mayor del mes de Diciembre 2019</p>
      <div className="px-6 md:w-[45rem] h-96 lg:h-100%  mr-auto mb-10">
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/8qz-LryudNo?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <Table items={data} />
    </div>
  );
};

export default page;
