import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "cómo_proceder_cuando_se_presenta_mensaje_de_inconsistencia_al_generar_un_reporte_en_excel_en_el_ambiente_del_concarsql",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/11/1094_Cod.1094_D01081_como_proceder_cuando_se_presenta_mensaje_de_inconsistencia_al_generar_un_reporte_en_excel_en_el_ambiente_del_concarsql1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Al momento de trabajar en el ambiente del CONCAR SQL y emitir algun
        reporte en excelo o cargar/importar nuestras plantillas en excel; se
        puede presenta ocasionalmente algun mensaje de inconsistencia que no le
        permita realizar el proceso, debera realizar los pasos del manual
        adjunto.
      </p>
      <p>
        1.- Si el mensaje hace referencia a sus componentes DLL, debera realizar
        el proceso de actualizacion de la version que viene trabajando.
        Excluiyendo al sistema de los antivirus.
      </p>
      <p>
        2.- Caso contrario si persiste o presenta un mensaje similar: Se ha
        generado un error al Procesar el Reporte para Excel, se adjunta el
        Manual a realizar.
      </p>
      <p>
        En la parte inferior figura el link con las caracteristicas de
        compatibilidad (manual - video) para que lo revisen y ejecuten en cada
        una de sus equpos que tengan instaldo el sistema.
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
