import React from "react";

const page = () => {
  return (
    <div className="space-y-3">
      <h1>Expositor: C.P.C.C. Luis Oswaldo Sánchez Villacorta</h1>
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
      <p>
        Propiedad planta y equipo – Lo mejor de la NIC 16 – Activos Fijos - CPC
        Luis Sanchez Villacorta from REAL SYSTEMS SA on Vimeo.
      </p>
    </div>
  );
};

export default page;
