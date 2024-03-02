import TablaDocumentosRelacionados from "@/components/TablaDocumentosRelacionados";
import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "¿Mensaje Error de Apertura de Archivo CTCIAS",
      description: "Ingresa para que encuentres la solución,",
      href: "/globalSireCb/seguridad/mensaje-error-apertura-archivo-ctcias",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso</h1>
      <p>
        Al momento de realizar algún proceso en el sistema (reindexación,
        consolidación, generación de backup, etc.), aparece el mensaje de{" "}
        {"ERROR DE APERTURA DE ARCHIVO"}
      </p>
      <p>Los mensajes más frecuentes son:</p>
      <ul className="list-disc px-5">
        <li>
          ERROR DE APERTURA DE ARCHIVO R:\Concar80\CPEXX ; donde XX= Código de
          compañía del CONCAR{" "}
        </li>
        <Image
          alt="Que contiene la Tabla General"
          src="https://miconcar.com/uploads/documentos/concar_cb_c1_v2014_09_error_apertura_de_archivos_img1_v1_3.png"
          width={450}
          height={450}
        />
        <li>
          ERROR DE APERTURA DE ARCHIVO R:\Concar80\CTGXX ; donde XX= Código de
          compañía del CONCAR{" "}
        </li>
        <Image
          alt="Que contiene la Tabla General"
          src="https://miconcar.com/uploads/documentos/concar_cb_c1_v2014_09_error_apertura_de_archivos_img2_v1_4.png"
          width={450}
          height={450}
        />
        <li>ERROR DE APERTURA DE ARCHIVO R:\Concar80\CTCAMB</li>
        <Image
          alt="Que contiene la Tabla General"
          src="https://miconcar.com/uploads/documentos/concar_cb_c1_v2014_09_error_apertura_de_archivos_img3_v1_2.png"
          width={450}
          height={450}
        />
      </ul>

      <h1 className="font-bold">
        Nota: En el ejemplo se hace referencia a la ruta: R:\Concar80\
        {"NombredeArchivo"}, sin embargo, la ruta puede variar dependiendo de
        donde esté almacenada su base de datos. Para verificar la ruta de la
        base de datos dentro del sistema, ir a la opcion Acerca de/Acerca de y
        verificar en la parte inferior izquierda.
      </h1>
      <p>
        El mensaje se origina cuando la ventana de acceso* al sistema se
        encuentra abierta o cuando se tiene otra ventana del sistema en uso,
        ambas casos pueden ocurrir en el mismo equipo o en otro equipo si se
        trabaja el CONCAR en red.
      </p>
      <p className="font-bold">Solución:</p>
      <p>
        1. Verificar que nadie se encuentre trabajando en el sistema al momento
        de reindexar las bases de datos principales (Ver también Error de
        Apertura de Archivo CTCIAS).
      </p>
      <p>
        2. En caso se trabaje con otros software de Real Systems, considerar
        tambien que se deben cerrar dichos sistemas, para poder concluir
        satisfactoriamente el proceso de reindexación.
      </p>
      <p>
        3. Si es un CONCAR monousuario, verificar tener permisos de lectura y
        escritura en la carpeta de instalación.
      </p>
      <p>
        4. Si es un CONCAR en red, verificar que la carpeta REAL se encuentre
        compartida con el usuario TODOS y con permisos de lectura y escritura
        (Ver también Permisos). Además, verificar si la unidad de red que se
        conecta a la carpeta Real se encuentra habilitada.
      </p>
      <p>
        5. Los mensajes también podrían deberse a que alguno de los archivos de
        la base de datos está corrupto (Ver también Mensaje de archivo corrupto)
      </p>
      <TablaDocumentosRelacionados items={data} />
    </div>
  );
};

export default page;
