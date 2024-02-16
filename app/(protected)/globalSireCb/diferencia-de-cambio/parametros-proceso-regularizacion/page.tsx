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
      <h1 className="font-bold">Caso</h1>
      <p>
        Dónde y cómo se configuran las cuentas contables a considerar en el
        proceso de regularización por diferencia de cambio.
      </p>
      <h1 className="font-bold">Solución</h1>
      <p>
        1. Ir a Archivos-{">"}Tabla General-{">"}Mantenimiento Tabla General,
        seleccionar la tabla general 55 y presionar Enter:
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_reg_dif_cambio_v1.png"
        width={600}
        height={600}
      />
      <p>
        2. En la siguiente ventana, agregar las cuentas que se considerarán para
        el proceso de regularización. Para ello seleccionar el botón Crear:
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_configuracion_regularizacion_diferencia_cambio_1.0_05__.png"
        width={600}
        height={600}
      />
      <p>
        3. En el primer campo {"Clave"} se ingresa un código, el cual siempre
        empezará con “CTA”, seguido de un correlativo numérico a dos dígitos.{" "}
      </p>
      <p>
        En el segundo campo {"Descripción"} se ingresa el código cuenta contable
        desde la posición 1 y desde la posición 14, opcionalmente se puede
        agregar la descripción de la cuenta. La cuenta debe estar previamente
        creada en el plan de cuentas.
      </p>
      <p>Un vez llenados los dos campos Grabar.</p>
      <p>Por ejemplo:</p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_reg_dif_cambio_2_v1.png"
        width={600}
        height={600}
      />
      <p>
        4. Una vez grabada la cuenta, se mostrará en la tabla tal como se
        observa:
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_reg_dif_cambio_3_v1.png"
        width={600}
        height={600}
      />
      <p>
        Nota.- En las claves: SUB, XGA y XGP no se deben modificar, excepto
        cuando las cuentas de ganáncia y pérdida por diferencias de cambio
        difieren a las consignadas en la tabla, en ese caso se debe modificar el
        código de la(s) cuenta(s) contable(s) de acuerdo a los que existen en su
        plan de cuentas.
      </p>
      <p>
        5. Una vez configurada la tabla, se recomienda dar una revisión final
        para verificar que no existan cuentas duplicadas ya que el sistema solo
        valida la clave; en caso existan cuentas duplicadas en la tabla 55 se va
        a crear una secuencia duplicada en el detalle del asiento automático
        generado, para corregir, deberá elimianr una de las cuentas de la tabla
        general 55, luego eliminar el asiento y volver a realizar el proceso.
      </p>
    </div>
  );
};

export default page;
