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
        Compañía 2010 (o año anterior) con plan de cuentas de compañía 2011 (o
        año superior).
      </p>
      <h1 className="font-bold">Solución</h1>
      <p>
        1. Cuando se crea una compañía para el 2010 (o año anterior) solo se
        muestran tres opciones:
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_plan_empresarial_ejercicio_2010_1.0_07__.png"
        width={600}
        height={600}
      />
      <p>
        2. Ya sea que se utilice la opción 1 o la opción 3, la compañía que se
        utilice como referencia debe tener creado el mismo ejercicio. Caso
        contrario, no se podrá copiar el plan de cuentas de la compañía de
        referencia.
      </p>
      <p className="font-bold">Nota.-</p>
      <p>
        En el ejemplo líneas arriba se está mostrando la compañía 04 con el año
        2010, tomando como referencia la compañía 03; si la compañía 03 no tiene
        el ejercicio 2010 el sistema inhabilitará el proceso y mostrará el
        mensaje siguiente:
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_plan_empresarial_ejercicio_2010_1.0_08__.png"
        width={600}
        height={600}
      />
    </div>
  );
};

export default page;
