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
        El sistema cuenta con una nueva interfaz para el mantenimiento de
        presupuesto cuya finalidad es la misma del Mantenimiento del Presupuesto
        (Antiguo). Es decir, el usuario puede usar cualquiera de éstos dos
        mantenimientos para configurar el presupuesto.
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_c9_1_mantenimiento_presupuesto_.jpg"
        width={650}
        height={650}
      />
      <p>
        Para configurar el Presupuesto por centro de costo seleccionar Por
        Centro de Costo y el sistema mostrará todas las cuentas que tienen check
        de centro de costo en el Plan de Cuentas.
      </p>
      <p>
        Después de seleccionar un centro de costo, pulsar Enter en la celda
        correspondiente a la cuenta-mes para ingresar el monto presupuestado.
      </p>
      <p>
        Para configurar el presupuesto por cuenta contable seleccionar la opción
        Por Ganancias y Pérdidas y el sistema mostrará las cuentas que tienen
        Formato de Ganancias y Pérdidas por naturaleza o por función. Luego,
        pulsar la tecla Enter en la celda correspondiente a la cuenta-mes para
        ingresar el monto presupuestado.
      </p>
      <p>
        IMPORTANTE: Cuando son gastos fijos y los importes iguales, mantener
        pulsada la tecla Shift y seleccionar el rango con la flecha para luego
        ingresar el importe y presionar Enter.
      </p>
      <p>
        Opcionalmente, puede configurar el presupuesto en Excel y cargarlo al
        sistema. Para realizarlo, presionar el botón
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_c9_1_mantenimiento_presupuesto_1_1.jpg"
        width={35}
        height={35}
      />
      <p>
        y el sistema creará una hoja de cálculo para ingresar los montos en el
        Presupuesto. Una vez terminado, éste se podrá cargar al CONCAR pulsando
        el botón{" "}
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_c9_1_mantenimiento_presupuesto_2_.jpg"
        width={35}
        height={35}
      />
      <div>
        {" "}
        <Image
          alt="Que contiene la Tabla General"
          src="https://miconcar.com/uploads/documentos/concar_cb_c9_1_mantenimiento_presupuesto_3_.jpg"
          width={650}
          height={650}
        />
      </div>
      <p>Para cargar al sistema, el presupuesto; pulsar el botón</p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_c9_1_mantenimiento_presupuesto_2_.jpg"
        width={35}
        height={35}
      />
      <p>y el sistema mostrará el siguiente mensaje:</p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_c9_1_mantenimiento_presupuesto_4_.jpg"
        width={650}
        height={650}
      />
      <p>
        Seleccionar la opción correspondiente y la ruta donde se encuentra
        guardado el archivo para carga del presupuesto. Después de realizada la
        carga, se mostrarán los montos presupuestados en el sistema. También se
        pueden modificar los importes cargados pulsando la tecla Enter en la
        celda
      </p>
      <p>correspondiente. Para guardar los cambios, presionar el botón</p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/sispag_sql_boton_guardar_1.jpg"
        width={35}
        height={35}
      />
    </div>
  );
};

export default page;
