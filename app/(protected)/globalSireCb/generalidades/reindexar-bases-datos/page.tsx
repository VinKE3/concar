import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Que contiene la Tabla General",
      href: "https://miconcar.com/uploads/documentos/1062_Cod.1062_D01049_que_contiene_la_tabla_general.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Esta opción permite reordenar, entre otras, las siguientes bases de
        datos:
      </p>
      <ul className="font-bold px-5">
        <li>Tipos de Cambio</li>
        <li>Tabla de Compañías</li>
        <li>Tabla de Usuarios, Usuarios-Programas, Usuarios-Compañias</li>
      </ul>
      <p>
        Para ejecutar esta opción NADIE DEBE ESTAR TRABAJANDO EN EL SISTEMA.
        Seleccionada la opción el sistema mostrará la siguiente pantalla:
      </p>
      <Image
        alt="1"
        src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_4_reindexacion_de_bases_datos_comunes_1.jpg"
        width={550}
        height={550}
      />
      <p>En esta pantalla se podrá:</p>
      <Image
        alt="2"
        src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_1_aceptar_3.jpg"
        width={100}
        height={100}
      />
      <p>ACEPTAR EL REINDEXADO (Alt-C)</p>
      <Image
        alt="3"
        src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_1_salir_3.jpg"
        width={100}
        height={100}
      />
      <p>SALIR SIN REALIZAR EL PROCESO (Alt-M)</p>
      <p>Presionar el botón</p>
      <Image
        alt="4"
        src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_4_reindexacion_de_bases_datos_comunes_1.jpg"
        width={550}
        height={550}
      />
      <div className="py-5">
        {" "}
        <Image
          alt="5"
          src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_4_reindexacion_de_bases_datos_comunes_11.jpg"
          width={550}
          height={550}
        />
      </div>
    </div>
  );
};

export default page;
