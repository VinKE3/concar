import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Cómo proceder si al momento de reindexar se genera un mensaje de archivo corrupto dnd",
      href: "https://miconcar.com/uploads/documentos/1097_Cod.1097_D01084_c%C3%B3mo_proceder_si_al_momento_de_reindexar_se_genera_un_mensaje_de_archivo_corrupto_dnd.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Se adjunta instrucciones con la solución</p>

      <h1>
        TEMA: ¿Cómo proceder si al momento de Reindexar se genera un mensaje de
        archivo corrupto DND?
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
              src="https://www.youtube.com/embed/M7r3Qw2e8LQ?autoplay=0&amp;mute=0&amp;controls=0&"
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
