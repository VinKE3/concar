import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Con mi llave electrónica Real Key (RK) puedo instalar el CONCAR en cualquier equipo",
      href: "https://miconcar.com/uploads/documentos/758_Cod.0758_D00745_con_mi_llave_electronica_real_key_puedo_instalar_el_concar_en_cualquier_equipo.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        ¿Con mi llave electrónica Real Key (RK), puedo instalar el CONCAR® en
        cualquier equipo?
      </p>
      <p>
        TEMA: Con mi llave electrónica Real Key (RK), puedo instalar el CONCAR®
        en cualquier equipo
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
              src="https://www.youtube.com/embed/CIwc8zDQlTY?autoplay=0&amp;mute=0&amp;controls=0&"
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
