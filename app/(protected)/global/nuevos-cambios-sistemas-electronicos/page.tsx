import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Nuevos cambios en los sistemas electrónicos esoftcom sql",
      href: "https://miconcar.com/uploads/documentos/1160_Cod_1160_D01147_nuevos_cambios_en_los_sistemas_electronicos_esoftcomsql.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        A continuacion detallamos los nuevos cambios vigentes a partir del 17 de
        diciembre de 2021
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
