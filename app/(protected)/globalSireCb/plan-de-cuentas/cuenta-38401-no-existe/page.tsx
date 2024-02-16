import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Cuenta no existe en PCGE 2019 y 2020/Cuenta Titulo",
      href: "https://miconcar.com/uploads/documentos/1030_1030_Cuenta_38401_no_existe_en_PCGE_2019_y_2020.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Al ingresar al módulo contable sale un mensaje que se deriva de la
        configuración de cuenta equivalentes, dentro de la relación de cuentas
        que falta configurar con el nuevo PCGE 2020, son los siguientes:
      </p>
      <p>1. Cuenta 38401 no existe en el PCGE 2019 ni 2020</p>
      <p>2. Cuentas de titulo con 4 caracteres.</p>
      <p>
        En el documento adjunto se encuentra paso a paso la solución, tambien te
        invito que visualices el video:
      </p>
      <p>Cuenta 38401 no existe en PCGE 2019 Y PCGE 2020</p>

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
              src="https://www.youtube.com/embed/pIMHgw9Nf_g?autoplay=0&amp;mute=0&amp;controls=0&"
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
