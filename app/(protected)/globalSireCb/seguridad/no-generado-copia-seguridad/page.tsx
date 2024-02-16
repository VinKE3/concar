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
      <h1 className="font-bold">Caso:</h1>
      <p>
        Al ingresar al CONCAR el sistema advierte que no se ha generado una
        copia de seguridad.
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_copia_seguridad_1.jpg"
        width={600}
        height={600}
      />

      <h1 className="font-bold">Solución:</h1>
      <p>
        Este mensaje sale cuando no se genera una copia de seguridad y sale por
        cada compañía y ejercicio.
      </p>
      <p>
        Para evitar que el sistema muestre este mensaje solo debemos generar la
        copia de seguridad por cada compañía y ejercicio en la que aparezca el
        mensaje. Para ello siga los siguientes pasos:
      </p>
      <p>1. Ingresar a utilitarios, copia de seguridad.</p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_backup_1.jpg"
        width={550}
        height={550}
      />
      <p>
        2. Seleccionar la ruta donde se almacenará la copia de seguridad,
        seleccionar la compañía y año correspondiente y hacer clic en proceder.
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_backup_2.jpg"
        width={450}
        height={450}
      />
    </div>
  );
};

export default page;
