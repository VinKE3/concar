import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Declaración RVIE + RCE en SIRE SUNAT_cb_sq",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/11/1213_Cod.1213_D01200_Declaracion_RVIE_RCE_en_SIRE_SUNAT_cb_sql.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Consideraciones Generales</h1>
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
      <Table items={data} />
    </div>
  );
};

export default page;
