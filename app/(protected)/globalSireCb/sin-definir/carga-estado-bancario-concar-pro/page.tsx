import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Caso_practico_carga_del_estado_de_cuenta_bancario_al_econcarpro",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/03/1204_Cod.1204_D001191_caso_practico_carga_del_estado_de_cuenta_bancario_al_econcarpro1.pdf",
    },
    {
      id: 2,
      title: "Como_realizar_la_carga_del_estado_bancario_al_econcarpro",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/03/1204_Cod.1204_D001191_como_realizar_la_carga_del_estado_bancario_al_econcarpro1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        El proceso que detallamos, se realiza en todas nuestras versiones, no
        tiene ningun restriccion a la fecha; recuerde que es importante:
      </p>
      <p>
        - Use el mismo documento que figura en su estado de cuenta bancario para
        el registro contable
      </p>
      <p>
        - Use el mismo numero de operacion que figure en su estado de cuenta
        bancario, para el registro contable.
      </p>
      <p>
        - Recuerde que los documentos bancarios se crean en la Tabla 15 del
        Concar CB
      </p>
      <p>TEMA: ¿Cómo realizar la carga del Estado Bancario al e-Concar Pro?</p>
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
              src="https://www.youtube.com/embed/-55Bx6zcgwg?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <p>
        TEMA: Caso Practico: Carga de Estado de Cuenta al módulo e Concar Pro
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
              src="https://www.youtube.com/embed/7rXoHYRuYv4?autoplay=0&amp;mute=0&amp;controls=0&"
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
