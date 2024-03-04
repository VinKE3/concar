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
      <h1 className="font-bold">8.2 Consultas</h1>
      <h1 className="font-bold">8.2.1 Balance de Comprobación</h1>
      <p>
        Genera y muestra el balance de comprobación en modo consulta (hasta 6
        niveles), mostrando el detalle de las cuentas que conforman el asiento
        contable.
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_c8_2_conultas_1_.jpg"
        width={1050}
        height={700}
      />
      <p>Pulse el botón</p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_c8_2_conultas_3_.jpg"
        width={35}
        height={35}
      />
      <p>para un mayor nivel de consulta</p>
      <h1 className="font-bold">8.2.2 Saldo por Anexo-cuenta</h1>
      <p>
        Muestra los anexos existentes en modo de consulta (hasta 6 niveles).
        Sólo permite consultar las cuentas codificadas con Nivel 3 en el
        Mantenimiento de Plan de Cuentas.
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_c8_2_conultas_2_1.jpg"
        width={615}
        height={400}
      />
      <p>Presionar el botón</p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_c8_2_conultas_3_.jpg"
        width={35}
        height={35}
      />
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_c8_2_conultas_4_.jpg"
        width={615}
        height={400}
      />
      <p>Presionar el botón</p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_c8_2_conultas_3_.jpg"
        width={35}
        height={35}
      />
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_c8_2_conultas_6_.jpg"
        width={615}
        height={400}
      />
      <p>Presionar el botón</p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_c8_2_conultas_3_.jpg"
        width={35}
        height={35}
      />
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_c8_2_conultas_8_.jpg"
        width={615}
        height={400}
      />
      <p>Presionar el botón</p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_c8_2_conultas_3_.jpg"
        width={35}
        height={35}
      />
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_c8_2_conultas_10_.jpg"
        width={615}
        height={400}
      />
      <p>Presionar el botón</p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_c8_2_conultas_3_.jpg"
        width={35}
        height={35}
      />
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_c8_2_conultas_12_.jpg"
        width={501}
        height={400}
      />
    </div>
  );
};

export default page;
