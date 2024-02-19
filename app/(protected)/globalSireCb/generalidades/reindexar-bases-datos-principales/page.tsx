import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Reindexar Bases Datos Movimientos",
      href: "https://miconcar.com/uploads/documentos/120_CONCAR_CB_Reindexar_bases_datos_movimientos.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Esta opción permite reordenar, entre otras, las siguientes bases de
        datos:
      </p>
      <ul className="font-bold px-5">
        <li>Plan de Cuentas</li>
        <li>Tablas Generales</li>
        <li>Anexos</li>
        <li>Tabla de Transferencia</li>
        <li>Tabla de Cierre</li>
        <li>Cuentas Bancarias</li>
      </ul>
      <p>
        Para ejecutar esta opción NADIE DEBE ESTAR TRABAJANDO EN EL SISTEMA.
        Seleccionada la opción el sistema mostrará la siguiente pantalla:
      </p>
      <Image
        alt="1"
        src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_1_reindexacion_de_bases_datos_principales_.jpg"
        width={550}
        height={550}
      />
      <p>En esta pantalla se podrá:</p>
      <div className="py-5">
        <Image
          alt="2"
          src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_1_aceptar_.jpg"
          width={100}
          height={100}
        />
        <p>ACEPTAR EL REINDEXADO (Alt-C)</p>
      </div>

      <div className="py-5">
        <Image
          alt="3"
          src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_1_salir_.jpg"
          width={100}
          height={100}
        />
        <p>SALIR SIN REALIZAR EL PROCESO (Alt-M)</p>
      </div>
      <div className="py-5">
        <p>Presionar el botón</p>
        <Image
          alt="4"
          src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_1_aceptar_.jpg"
          width={100}
          height={100}
        />
      </div>
      <Image
        alt="5"
        src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_1_reindexacion_de_bases_datos_principales_1.jpg"
        width={550}
        height={550}
      />
    </div>
  );
};

export default page;
