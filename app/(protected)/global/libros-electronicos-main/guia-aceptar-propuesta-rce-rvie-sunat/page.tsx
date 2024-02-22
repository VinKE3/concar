import Table from "@/components/Table";
import React from "react";

const page = () => {
  return (
    <div className="space-y-4">
      <h1>Fuente SUNAT - Guía para aceptar propuesta RCE y RVIE</h1>

      <div className=" md:w-[45rem] h-96 lg:h-100%  mr-auto mb-10">
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
              src="https://www.youtube.com/embed/zPSwryG-MtY?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
