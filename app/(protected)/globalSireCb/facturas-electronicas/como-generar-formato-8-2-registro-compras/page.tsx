import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Cómo generar Formato 8.2 Registro de Compras de No Domiciliados PLE 5.1",
      href: "https://miconcar.com/uploads/documentos/1065_Cod.1065_D01052_c%C3%B3mo_generar_formato8.2_registro_de_compras_de_no_domiciliados_ple5.1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Para generar el Formato 8.2 - Registro de Compras No Domiciliadas PLE
        5.1, previamente se debio ejecutar estos procesos:
      </p>
      <p>
        1.- Consolidacion / Proceso Consolidacion se ejecuta desde el mes de
        enero, mes a mes
      </p>
      <p>
        2.- Analisis de Cuenta / Generacion archivo saldo documento se ejecuta
        desde el mes de enero, mes a mes
      </p>
      <p>
        Luego de ello genera su Registro de Compras y sigue las indicaciones del
        Manual adjunto:
      </p>
      <h1>
        TEMA: Cómo generar Formato 8.2 Registro de Compras de No Domiciliados
        PLE 5.1
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
              src="https://www.youtube.com/embed/OfOhHMdoZmc?autoplay=0&amp;mute=0&amp;controls=0&"
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
