import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Instructivo Creación de Nuevo Ejercicio 2020 con el Nuevo Plan Contable General Empresaria",
      href: "https://miconcar.com/uploads/documentos/1029_Instructivo_Nuevo_PCGE2020_Concar_SQL_Creaci%C3%B3n_Nuevo_Ejercicio_V1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        De acuerdo a los últimos cambios suscitados por la entrada en vigencia
        del Nuevo Plan Contable General Empresarial (PCGE 2020) según la
        Resolución del Consejo Normativo de Contabilidad Nº002-2019-EF/30, hemos
        lanzado nuevas versiones de nuestro software los cuales han sido
        especialmente diseñados para facilitar el uso de todos los posibles
        casos sobre la aplicación del nuevo PCGE.
      </p>
      <p>
        Desde la versión CONCAR SQL 13.63 el sistema cuenta con 3 diferentes
        formas de crear un nuevo Ejercicio 2020:
      </p>
      <p>Opción 1. Voy a utilizar el PCGE del ejercicio 2019 para el 2020 </p>
      <p>
        Opción 2. Voy a crear el Plan de Cuentas para el ejercicio 2020 tomando
        como modelo el nuevo PCGE:
      </p>
      <p>-Desde Plantilla Concar</p>
      <p>-Desde mi Plantilla Excel</p>
      <p>
        Opción 3. Para el ejercicio 2020 voy a copiar el modelo del plan de
        cuentas de la compañía
      </p>
      <p>
        Para conocer la funcionalidad de cada opción, puede revisar el
        instructivo adjunto.
      </p>
      <p>TEMA 2: Creación de un Nuevo Ejercicio 2020</p>
      <p>Introducción</p>
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
              src="https://www.youtube.com/embed/2CFAdDYPn-0?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <p>Opción 01. Utilizar el Plan del Ejercicio 2019</p>
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
              src="https://www.youtube.com/embed/fh7hx-GTgAg?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <p>Opción 02. Crear Plan Contable con Plantilla</p>
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
              src="https://www.youtube.com/embed/B0bhQijZ4gQ?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <p>Opción 03. Copiar Modelo del Plan de Compañía</p>
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
              src="https://www.youtube.com/embed/KQJP9DVrX-s?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <p>TEMA 3: Creación de un Nuevo Ejercicio 2019</p>
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
              src="https://www.youtube.com/embed/59TonqSUbBA?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <p>Opción 05. Nuevo con el PCGE del 2020</p>
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
              src="https://www.youtube.com/embed/UCICdqcn3-M?autoplay=0&amp;mute=0&amp;controls=0&"
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
