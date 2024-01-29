import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Como proceder para activar su real key - virtual",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/11/1118_Cod.1118_D01105_como_proceder_para_activar_su_real_key_virtual1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Para poder activar su llave virtual adjutamos un manual con los pasos
        detallados.
      </p>
      <p>
        simismo tener presente los procesos que bloquean su llave virtual en su
        equipo, tales como:
      </p>
      <p>- Cambio en el nombre del equipo</p>
      <p>- Duplicidad del archivo RKV en su Concar 80 </p>
      <p>- Formateo del Equipo</p>
      <p>- Actualizaciones del sistema operativo</p>
      <p>TEMA: ¿Cómo proceder para Activar su Real Key - Virtual?</p>
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
              src="https://www.youtube.com/embed/-3tcF65tSzE?autoplay=0&amp;mute=0&amp;controls=0&"
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
