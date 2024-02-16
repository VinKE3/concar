import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Como_crear_el_ejercicio_2024_en_el_concarcb",
      href: "https://miconcar.com/uploads/documentos/170_Cod.0170_D00167_como_crear_el_ejercicio_2023_en_el_concarcb.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Creación de un nuevo Ejercicio </h1>
      <p>
        1. Opción que permite la creación de nuevos ejercicios; creando los
        archivos correspondientes que necesita el sistema para su uso. Para
        ello, sólo un usuario debe estar trabajando con el sistema CONCAR.
      </p>
      <p>
        2. Para la creación del nuevo ejercicio debe ingresar a CONCAR, en la
        Compañía que desea crear el nuevo ejercicio.
      </p>
      <p>
        3. En la compañía que desea crear el nuevo ejercicio, reindexe (para
        verificar que ningún usuario esté usando el sistema).
      </p>
      <p>
        4. Recuerde que es importante contar con los sistemas (versiones
        actualizadas), estas versiones lo pueden obtener directamente de la zona
        de {"Descargas"}.
      </p>
      <p>
        5. Si presenta algun percanse al momento de la descarga, archivos
        dañados, error en la conexion, mensaje similar etc por favor deberan
        verificar:
      </p>
      <p>
        - Trabajen con un cable de internet, para una señal estable. (NO WIFI)
      </p>
      <p>
        {" "}
        - Si persiste, pueden solicitarnos el envio del actualizador por correo
        escribiendo a licencias@realsystems.com.pe, colocan su razon social, ruc
        e imagen del percanse que le aparece al descargar del portal, detallan
        que solicitan el actualizador de version del sistema.
      </p>
      <p>
        El proceso de creacion de periodo, es el mismo en TODOS los periodos de
        aqui en adelante
      </p>
      <p>Adjuntamos Manual</p>

      <h1>TEMA: ¿Cómo crear un nuevo Ejercicio?</h1>
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
              src="https://www.youtube.com/embed/dRKs_Y59JKw?autoplay=0&amp;mute=0&amp;controls=0&"
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
