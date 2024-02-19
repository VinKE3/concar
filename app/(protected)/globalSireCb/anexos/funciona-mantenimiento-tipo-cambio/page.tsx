import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Como funciona el mantenimiento del tipo de cambio y consulta ruc - sunat",
      href: "https://miconcar.com/uploads/documentos/1136_Cod.1136_D01123_como_funciona__el_mantenimiento_del_tipo_de_cambio_y_consulta_ruc_sunat.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Segun Manual adjunto detallamos que pasos realizar:</p>
      <p>
        - Es responsabilidad del usuario, validar diariamente el tipo de cambio
        al momento que se contabiliza sus operaciones.
      </p>
      <p>
        - Asimismo, siempre indicamos generar copia de seguridad – backup cada
        cierto tiempo para salvaguardar su información.
      </p>
      <p>
        - En caso se presente la caída del portal SUNAT, el usuario deberá
        digitar manualmente tanto el tipo de cambio y anexo.
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="/generalidades/tablaGeneral.png"
        width={300}
        height={300}
      />
      <h1>
        TEMA: ¿Cómo funciona el mantenimiento del Tipo de Cambio y Consulta RUC
        - SUNAT?
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
              src="https://www.youtube.com/embed/hguxXAQe-dk?autoplay=0&amp;mute=0&amp;controls=0&"
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
