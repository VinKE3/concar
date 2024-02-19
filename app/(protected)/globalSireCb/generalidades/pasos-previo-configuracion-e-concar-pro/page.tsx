import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Pasos previos para la configuración del e Concar Pro",
      href: "https://miconcar.com/uploads/documentos/1045_C1045_D01032_pasos_previos_configuracion_econcar_pro_v2020.041.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Al momento de descargar el CONCAR CB, observaran una carpeta de nombre
        e-CONCAR PRO, el cual deberan tambien instalar en sus equipos de manera
        similar que el CONCAR CB, ambos estan enrutados a la misma base de
        datos; ejemplo C:/Concar80 una vez tengan el modulo e-CONCAR PRO en sus
        equipos ingresaran colocando el mismo
      </p>
      <p>USUARIO: SIST</p>
      <p>CONTRASEÑA: NORTON</p>
      <p>
        Visualizaran el listado de compañias que por default esta leyendo del
        CONCAR CB, escogen su compañia y una vez dentro del ambiente del modulo
        e-CONCAR PRO, deberan realizar las siguientes configuraciones previas:
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
