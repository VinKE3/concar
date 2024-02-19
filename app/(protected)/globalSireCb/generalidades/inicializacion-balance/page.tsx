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
        Esta opción inicializa los archivos de balance, centros de costos,
        cuentas automáticos y movimiento mensual.
      </p>
      <p>
        La ventana de la opción indica los casos en que se debe procesar y que
        se debe realizar después de este proceso.
      </p>
      <p>Paso 1. Se va a la ruta: Utilitarios/Inicialización Balance</p>
      <p>Seleccionada la opción el sistema mostrará la siguiente pantalla:</p>
      <Image
        alt=""
        src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_9_inicializacion_de_balance_.jpg"
        width={500}
        height={500}
      />
      <p>Presionar el botón </p>
      <Image
        alt=""
        src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_9_inicializar_.jpg"
        width={150}
        height={150}
      />
      <p>
        Paso 2: Se va a la ruta: Utilitarios/Reindexar base de datos … (Las 4
        opciones, una a una).
      </p>
      <p>
        Paso 3: Diríjase a la opción Consolidación/Proceso de Consolidación
        (desde Enero, febrero, marzo… hasta el mes donde presenta el impase, mes
        por mes, en orden cronológico)
      </p>
      <p>
        Paso 4: Se va a Análisis de Cuenta/Generación de Archivo de Saldo por
        Documento/ Procesar, al último día del último mes consolidado.
      </p>
    </div>
  );
};

export default page;
