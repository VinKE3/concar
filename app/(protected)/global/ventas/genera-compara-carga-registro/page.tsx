import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Generación_de_Registro_de_Ventas_e_Ingresos_Electrónicos (RVIE)_con_CONCAR SIRE",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/10/Cod.1170_D01157_Generacion_de_Registro_de_Ventas_e_Ingresos_Electronicos-RVIE_con_CONCAR_SIRE_cb_sql.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1></h1>
      <ul className="px-5 list-disc">
        <li>Validar entorno Windows UPDATE se encuentre actualizado.</li>
        <li>
          Trabajar en una conexión de internet estable – cable de internet (No
          WIFI).
        </li>
        <li>
          Ocasionalmente algún antivirus puede detectar como falso virus al
          sistema, deberán su personal de TI y excluirlo.
        </li>
        <li>Verificar que la licencia de su Office (Excel) este activa.</li>
        <li>
          CONCAR SIRE es compatible la versión vigente de CONCAR CB a partir del
          2023.10 y CONCAR SQL a partir del 14.15
        </li>
        <li>
          Para generar el archivo RVIE ya no es necesario “Generar Ventas” en el
          sistema CONCAR, este proceso ya lo realiza el CONCAR SIRE automático
          (ver punto 2)
        </li>
        <li>
          Toda modificación de comprobantes dentro del sistema CONCAR CB o SQL
          para que el CONCAR SIRE lo considere se tiene que salir del sistema y
          volver a ingresar.
        </li>
        <li>
          Lo pasos “Comparativo y Mantenimiento” son opcionales, también puede
          declarar reemplazando el archivo que emite el CONCAR SIRE (ver punto
          2).
        </li>
        <li>En el ambiente de SIRE SUNAT, todo proceso genera un ticket</li>
        <li>
          La administración de la gestión del ticket es responsabilidad de SUNAT
        </li>
        <li>
          Cualquier incidencia en el ambiente SIRE, por favor comunicarse con
          SUNAT
        </li>
      </ul>
      <h1>1. TEMA: ¿Cómo Genera archivo preliminar compras?</h1>
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
              src="https://www.youtube.com/embed/kE1lQ1AM21Y?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <h1>2. TEMA: ¿Cómo Genera el comparativo propuesta compras?</h1>
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
              src="https://www.youtube.com/embed/kE1lQ1AM21Y?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <h1>3. TEMA: ¿Cómo realizar el mantenimiento de Compras?</h1>
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
              src="https://www.youtube.com/embed/kE1lQ1AM21Y?autoplay=0&amp;mute=0&amp;controls=0&"
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
