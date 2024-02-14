import Table from "@/components/Table";
import React from "react";

const GuiaReemplazarPropuestaRceSire = () => {
  const data = [
    {
      id: 1,
      title: "Manual PLE Inventarios y Balances",
      href: "https://miconcar.com/uploads/documentos/1001_Manual_ple_5.0_Inventarios_y_Balances.pdf",
    },
  ];
  return (
    <div className="space-y-3">
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
    </div>
  );
};

export default GuiaReemplazarPropuestaRceSire;
