import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Como realizar la Liquidación Previa de Impuestos en el e-CONCAR PRO",
      href: "https://miconcar.com/uploads/documentos/1041_Cod.1041_D01028_C%C3%B3mo_realizar_la_Liquidaci%C3%B3n_Previa_de_Impuestos_en_el_e-CONCAR_PRO.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Esta funcionalidad nos permite generar una hoja de trabajo - Pre
        Liquidación de Impuestos del mes, ya que traslada la informacion
        registrada en el Concar CB (digase su compras y ventas del mes); no
        genera ningun archivo plano para importar al PDT.
      </p>
      <Image
        alt="liquidacion impuesto"
        src="/sinDefinir/liquidacionImpuesto.png"
        width={500}
        height={500}
      />
      <p>
        Para conocer el funcionamiento te invito a que revises el documento y
        video adjunto líneas abajo
      </p>
      <p>Nota: </p>
      <p>
        - Generar previamente el archivo mensual de compras y ventas, consolidar
        el mes y luego podra generar su liquidacion de impuestos actualizada,
        por el modulo e concar pro
      </p>
      <p>
        - Tener cuidado y verificar que se este ingresando correctamente a la
        compañia y periodo, por el modulo e concar pro
      </p>
      <p>TEMA: ¿Cómo realizo la Liquidación de Impuestos en el e-Concar Pro?</p>
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
              src="https://www.youtube.com/embed/_6Q1N_Klzyg?autoplay=0&amp;mute=0&amp;controls=0&"
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
