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
        Registro de Ventas con porcentaje afecto e inafecto. Para el ejemplo, se
        regitrará una factura de venta 50% afecta y 50% inafecta.
      </p>
      <h1 className="font-bold">Solución</h1>
      <p>
        1. Ir Reportes/ Registro Ventas/ Mantenimiento Parámetros Ventas, ceja
        “Cuenta Ingreso Ventas” y configurar la cuenta 70 a usar como inafecta (
        {"I"}). A la cuenta 70 grabada no deberá asignársele ningún tipo de
        cuenta.
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_sql_inafecto_11.jpg"
        width={600}
        height={600}
      />
      <p>
        2. Ir a Comprobante Ventas, seleccionar la cuenta 70 gravada, presionar
        Enter y registrar el importe gravado:
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_sql_inafecto_2.jpg"
        width={600}
        height={600}
      />
      <p>
        3. Seleccionar la cuenta 70 inafecta, presionar Enter y registrar el
        importe inafecto:
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_inafecta_afecta_4.jpg"
        width={600}
        height={600}
      />
      <p>
        4. Pasar con Enter al botón “+”, y presionar Enter nuevamente cuando el
        botón esté seleccionado para que se grabe el importe en el sistema:
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_inafecta_afecta_5.jpg"
        width={600}
        height={600}
      />
      <p>
        5. Presionar Enter para pasar al campo I.G.V e ingresar el importe del
        I.G.V, luego grabar.
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_inafecta_afecta_7.jpg"
        width={600}
        height={600}
      />
      <p>6. Finalizar el asiento.</p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_inafecta_afecta_8.jpg"
        width={600}
        height={600}
      />
      <p>
        7. Emitir el formato oficial impreso 14.1 Registro de Ventas e Ingresos
        y verificar:
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_sql_inafecto_3.jpg"
        width={600}
        height={600}
      />
      <p>
        Nota.- En caso se seleccione una cuenta previamente registrada, el
        sistema emitirá el siguiente mensaje de advertencia:
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_inafecta_afecta_6.jpg"
        width={600}
        height={600}
      />
    </div>
  );
};

export default page;
