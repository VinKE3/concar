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
        Si se desea llevar el presupuesto por centro de costo ingresar por cada
        centro de costo: Cuenta contable e importe presupuestado para un mes
        seleccionado, tal como se muestra en la pantalla siguiente.
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_c9_2_mantenimiento_presupuesto_antiguo_.jpg"
        width={600}
        height={600}
      />
      <p>Presionar el botón</p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/sispag_sql_boton_crear_1.jpg"
        width={60}
        height={60}
      />
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_c9_2_mantenimiento_presupuesto_antiguo_1_.jpg"
        width={500}
        height={500}
      />
      <p>
        MES: Ingresar el mes en el cual se va a asignar el monto presupuestado.
      </p>
      <p>
        CENTRO DE COSTO: Presionar Shift+F1 y seleccionar el centro de costo en
        el cual se va a ingresar el monto presupuestado
      </p>
      <p>
        CUENTA: Presionar Shift+F1 e ingresar la cuenta contable en la cual se
        va a presupuestar
      </p>
      <p>IMPORTE MN: Monto presupuestado</p>
      <p>Presionar el botón</p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/sispag_sql_boton_guardar_1.jpg"
        width={60}
        height={60}
      />
      <p>
        Si se desea llevar el presupuesto sólo por cuenta contable rellenar con
        “XXXXXX”, el campo de Centro de Costo como se indica en la pantalla
        siguiente y completar los otros datos.
      </p>
      <p>
        Lo ingresado de esta manera servirá para sacar reportes del Presupuesto
        por Ganancias y Pérdidas.
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_c9_2_mantenimiento_presupuesto_antiguo_2_.jpg"
        width={550}
        height={550}
      />
      <p>
        MES: Ingresar el mes en el cual se va a asignar el monto presupuestado.
      </p>
      <p>
        CENTRO DE COSTO: Llenar con “XXXXXX” si no se desea considerar ningún
        centro de costo
      </p>
      <p>
        CUENTA: Presionar Shift+F1 e ingresar la cuenta contable en la cual se
        va a presupuestar
      </p>
      <p>IMPORTE MN: Monto presupuestado</p>
      <p>Presionar el botón</p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/sispag_sql_boton_guardar_1.jpg"
        width={60}
        height={60}
      />
      <p>
        Nota: En el Mantenimiento del presupuesto se irá guardando lo
        presupuestado por cada centro de costo/cuenta.
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_c9_2_mantenimiento_presupuesto_antiguo_3_.jpg"
        width={550}
        height={550}
      />
    </div>
  );
};

export default page;
