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
        Esta opción permite guardar en archivos comprimidos la información de
        uno o más ejercicios contable de una o más compañías.
      </p>
      <p>
        Es de vital importancia guardar regularmente (mínimo una vez a la
        semana) la información contable del CONCAR en cualquier medio, de
        preferencia, en un disco duro externo, CD o memoria externa para
        prevenir la pérdida de datos.
      </p>
      <p>
        Es de responsabilidad del usuario generar la copia de seguridad
        regularmente.
      </p>
      <p>Seleccionada la opción el sistema mostrará la siguiente pantalla:</p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_12_copia_de_seguridad_.jpg"
        width={600}
        height={600}
      />
      <p>
        En la parte superior de esta ventana se elegirá la unidad y carpeta del
        disco duro o memoria USB donde se generarán los archivo de la copia de
        seguridad.
      </p>
      <p>
        IMPORTANTE: La carpeta elegida debe tener un máximo de 8 caracteres en
        su nombre que debe incluir sólo letras y/o números.
      </p>
      <p>
        En la parte inferior se debe elegir la o las compañía(s) y el o los
        ejercicio(s) que se desean incluir en la copia de seguridad.
      </p>
      <p>Presionar el botón</p>

      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_12_proceder_.jpg"
        width={150}
        height={150}
      />
      <p>
        En la carpeta el sistema generará tres archivos comprimidos por cada
        compañía/ejercicio de acuerdo a lo siguiente:
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_12_disco_local_c_.jpg"
        width={450}
        height={450}
      />
    </div>
  );
};

export default page;
