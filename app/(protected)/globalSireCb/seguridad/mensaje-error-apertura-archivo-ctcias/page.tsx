import TablaDocumentosRelacionados from "@/components/TablaDocumentosRelacionados";
import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "¿Mensaje Error de Apertura de Archivo (CPE,CTG,CTCAMB)?",
      description:
        "Se detalla solución para superar mensajes de archivos corruptos, no encontrados, por lo general estos archivos se han dañado.",
      href: "/globalSireCb/seguridad/error-cpe-ctg-ctcamb",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso</h1>
      <p>
        Al reindexar por la opción Utilitarios/Reindexar Bases Datos Comunes, el
        sistema muestra el siguiente mensaje:
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_error_de_apertura_caso_01_04_2.png"
        width={450}
        height={450}
      />
      <h1 className="font-bold">Solución</h1>
      <p>
        El mensaje se origina cuando la ventana de acceso* al sistema se
        encuentra abierta o cuando se tiene otra ventana del sistema en uso,
        ambas casos pueden ocurrir en el mismo equipo o en otro equipo si se
        trabaja el CONCAR en red.
      </p>
      <p className="font-bold">* Ventana de Acceso al Sistema</p>
      <p>Nota.- Esta ventana puede estar oculta detrás de varias ventanas.</p>

      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/4.jpg"
        width={600}
        height={600}
      />
      <p>
        Por lo tanto para dar solución al mensaje, siga los siguientes pasos:
      </p>
      <ul className="list-decimal px-5">
        <li>
          Minimizar las ventanas y/o aplicaciones que se encuentren en uso y si
          encuentra alguna ventana de acceso ciérrela.
        </li>
        <li>
          Verificar que ninguna PC tenga la ventana de acceso al sistema abierto
          (ver paso 1) o que otros usuarios esten trabajando en el sistema.
          Nadie debe estar trabajando en el sistema al momento de reindexar.
        </li>
        <li>
          Una vez realizados los pasos 1 y 2 vuelva a reindexar. Si el mensaje
          persiste verifique sus permisos a la base de datos. Ver documento
          Memory Error y Permisos.
        </li>
        <li>
          En caso el nombre del archivo sea diferente a {"CTCIAS"}, revise el
          instructivo {"Mensaje de Archivo Corrupto"}, o contactese con nuestra
          area de consultoria llamando a la central 203-8300.
        </li>
      </ul>
      <TablaDocumentosRelacionados items={data} />
    </div>
  );
};

export default page;
