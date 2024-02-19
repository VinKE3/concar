import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Como realizar el proceso de regularización y ajuste por diferencia de cambio",
      href: "https://miconcar.com/uploads/documentos/1108_Cod.1108_D01095_como_realizar_el_proceso_de_regularizaci%C3%B3n_y_ajuste_por_diferencia_de_cambio.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        En esta nueva version se ha incluido ambos Mantenimientos, por la opcion
        menu: Archivos / Mantenimiento de Cuentas Regularización de Diferencia
        de Cambio o Archivos / Mantenimiento de Cuentas Ajuste de Diferencia de
        Cambio
      </p>
      <Image
        alt="procesoRegularizacion.png"
        src="/compras/contabilizar.png"
        width={200}
        height={200}
      />
      <p>
        Nota: Para la version Concar SQL no es necesario Consolidar y ejecutar
        Analisis de Cuentas, ya que estos pasos lo ejecutan al ejecutar RSFINA
      </p>
      <p>
        TEMA: ¿Cómo realizar el Proceso de Regularización y Ajuste por
        Diferencia de Cambio??
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
              src="https://www.youtube.com/embed/WgEh1zTzk4s?autoplay=0&amp;mute=0&amp;controls=0&"
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
