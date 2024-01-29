import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Como superar el mensaje Error 339 en tiempo de ejecución - Archivos OCX",
      href: "https://miconcar.com/uploads/documentos/11_Cod.011_D00011_error_339_en_tiempo_de_ejecucion.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        En el presente instructivo se detalla el procedimiento a realizar para
        superar el mensaje Error 339 en tiempo de ejecución - Archivos OCX al
        momento de ingresar al sistema o en alguna opción específica:
      </p>
      <p>Tanto para CB como para SQL...</p>
      <Image
        alt="superar-mensaje-error-06"
        src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_error_339_en_tiempo_de_ejecucion_2_1.jpg"
        width={400}
        height={400}
      />
      <p>TEMA: Error 339 en tiempo de ejecución</p>
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
              src="https://www.youtube.com/embed/hPCxA540m2k?autoplay=0&amp;mute=0&amp;controls=0&"
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
