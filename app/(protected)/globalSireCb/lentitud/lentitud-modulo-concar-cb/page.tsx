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
      <h1>
        En caso experimente lentitud en el uso del sistema, por favor siga los
        siguientes pasos:
      </h1>
      <p>1. Genere una copia de seguridad (backup) de toda su información.</p>
      <p>2. Ningún usuario debe estar trabajando en el sistema.</p>
      <p>3. Ubíquese en la base de datos:</p>
      <p>- Si es CONCAR Monousuario, normalmente será C:\Concar80.</p>
      <p>
        -Si es CONCAR Redes, normalmente será R:\Concar80 o desde el equipo
        principal \\Real\Concar80
      </p>
      <p>4. Ordene la carpeta Concar 80, de la base de datos, por nombre.</p>
      <p>
        Para ello posicione el cursor en el fondo blanco, presione clic derecho{" "}
        {"->Ordenar por->"} Nombre
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_lentitud_en_procesos_del_concar_.jpg"
        width={500}
        height={500}
      />
      <p>
        5. Seleccione todos los archivos que comienzan con la letra W y
        elimínelos:
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_lentitud_en_procesos_del_concar_1_.jpg"
        width={500}
        height={500}
      />
      <p>6. Ordene la carpeta Concar80, de la base de datos, por tipo.</p>
      <p>
        Encontrará una subcarpeta llamada TEMP, borre la carpeta TEMP. Esta
        carpeta se crea automáticamente con el uso del sistema.
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_lentitud_en_procesos_del_concar_2_.jpg"
        width={250}
        height={250}
      />
      <p>
        7. Ingresar al Concar, reindexe en las 4 opciones de Utilitarios y
        compruebe la velocidad en los procesos. En caso se mantenga la lentitud,
        tendría que revisar su tema con el área de Consultoría comunicándose al
        (01) 203-8300.
      </p>
    </div>
  );
};

export default page;
