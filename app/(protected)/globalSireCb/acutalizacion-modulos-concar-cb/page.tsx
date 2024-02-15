import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "omo realizar el proceso de actualización de concar cb y e_concar pro - Monousuario",
      href: "https://miconcar.com/uploads/documentos/1071_Cod1071_D01058_como_realizar_el_proceso_de_actualizaci%C3%B3n_de_concarcb_y_e_concarpro_monousuario.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1>
        Para realizar un proceso de actualizacion de forma optima se recomienda
        tener presente previamente:
      </h1>
      <p>1.- Generar una copia de seguridad de toda su informacion</p>
      <p>
        2.- El proceso de actualizacion se realizar equipo por equipo (ya sea
        trabaje en monousuario o en redes)
      </p>
      <p>
        3.- Es recomensabla pausar temporalmente sus antivirus o el firewall de
        proteccion, ya que a veces excluyen al ejecutable del actualizador del
        Concar{" "}
      </p>

      <h1>
        TEMA: Cómo realizar el Proceso de Actualización de CONCAR CB y e-CONCAR
        PRO Monousuario
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
              src="https://www.youtube.com/embed/2gkl5toNyBw?autoplay=0&amp;mute=0&amp;controls=0&"
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
