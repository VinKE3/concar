import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "como crear el ejercicio 2024 en el concar sql",
      href: "https://miconcar.com/uploads/documentos/1129_Cod.1129_D01116_como_crear_el_ejercicio_2021_en_el_concarSQL1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Es importante resaltar contar con los sistemas (versiones actualizadas),
        estas versiones lo pueden obtener de la zona de Descargas.
      </p>
      <p>
        Recuerden que en el actualizador entregamos, los modulos: Concar SQL / e
        Concar NET / RSFINA20 / RSRVIE.
      </p>
      <p>
        Si presenta algun percanse al momento de la descarga, archivos dañados,
        error en la conexion, etc deberan verificar:
      </p>
      <p>
        - Trabajen con un cable de internet, para una señal estable. (NO WIFI)
      </p>
      <p>
        - Si persiste, pueden solicitarnos el envio del actualizador por correo
        escribiendo a licencias@realsystems.com.pe, colocan su razon social y
        ruc, detallan que solicitan el actualizador del sistema.
      </p>
      <p>
        El proceso de creacion de periodo, es el mismo en TODOS los periodos a
        crear de aqui en adelante.
      </p>
      <h1>TEMA: ¿Cómo crear el Ejercicio 2021 en el Concar SQL?</h1>
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
              src="https://www.youtube.com/embed/q2obZ4Tvfjc?autoplay=0&amp;mute=0&amp;controls=0&"
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
