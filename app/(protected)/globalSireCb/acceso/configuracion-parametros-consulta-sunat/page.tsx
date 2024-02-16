import TablaDocumentosRelacionados from "@/components/TablaDocumentosRelacionados";
import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "como_se_realiza_la_configuracion_de_los_parametros_consulta_sunat_del_modulo_econcar_pro",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/08/1036_1036_Cod.1036_D01023_como_se_realiza_la_configuracion_de_los_parametros_consulta_sunat_del_modulo_econcar_pro1.pdf",
    },
  ];
  const data2 = [
    {
      id: 1,
      title:
        "¿Cómo contabilizar una Facturación Electrónica XML en el e-CONCAR PRO? - Incluye Video",
      description:
        "Aquí aprenderás en contabilizar facturas de compras en representación XML",
      href: "/globalSireCb/compras/facturacion-electronica-xml-econcar-pro",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        El sistema e-CONCAR PRO trabaja de forma conjunta con el sistema CONCAR
        CB, una vez haya realizado la instalación o actualización del modulo
        e-CONCAR PRO deberá realizar la configuracion y/o parametrizacion
        previa; con su CLAVE SOL - SUNAT de la siguiente manera:
      </p>
      <p>En la parte inferior figura manual y video a detalle</p>
      <h1>
        TEMA: ¿Cómo se realiza la Configuración de los Parámetros Consulta Sunat
        del módulo e-CONCAR PRO? - Incluye Video
      </h1>
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
              src="https://www.youtube.com/embed/ovybzU2MZdY?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <Table items={data} />
      <TablaDocumentosRelacionados items={data2} />
    </div>
  );
};

export default page;
