import TablaDocumentosRelacionados from "@/components/TablaDocumentosRelacionados";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "¿Activación del Real Key Virtual- RKV o Llave? - Incluye Video",
      description:
        "A continuación detallamos como proceder para activar su Real Key - Virtual",
      href: "/globalSireCb/acceso/activacion-real-key-virtual",
    },
    {
      id: 2,
      title: "¿Actualización CONCAR CB - Virtual? - Incluye Video",
      description:
        "A continuación de detalla los pasos a realizar para el proceso de Actualización del Concar CB - Virtual",
      href: "/globalSireCb/instalacion-actualizacion/instalar-concar-cb",
    },
    {
      id: 3,
      title: "¿Desactivar o Anular su Real Key Virtual- RKV?",
      description:
        "A continuación detallamos como Desactivar - Anular su Real Key Virtual",
      href: "/globalSireCb/acceso/desactivar-anular-real-key-virtual",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">
        La llave virtual, es un archivo que cumple las fuciones del real key
        fisico (usb, que colocamos al equipo para poder ingresar al sistema)
      </h1>
      <p>
        {" "}
        - Lo ubican en la unidad C, dentro de la carpeta Concar80, inicia con el
        ruc o dni del usuario que adquirio la licencia del concar y termina en
        las letras .rkv.
      </p>
      <p>
        - Este archivo debe ser enviado a nuestra Area de Licencias, solicitando
        la activacion de la llave virtual, colocando su razon social y ruc del
        usuario, adjuntan el archivo .rkv y enviar al correo a:
        licencias@realsystems.com.pe, solicitando active su llave
      </p>
      <p>
        - Si pasan los 05 o 15 dias y no han enviado este archivo a licencias
        para la activacion, el ingreso al sistema se puede bloquear.
      </p>
      <h1 className="font-bold">
        ¿En que casos el archivo .rkv se puede bloquear?
      </h1>
      <p>
        - Cuando formatean el equipo, en este caso deben seguir los pasos del
        proceso adjunto ¿Como desactivar una llave virtual?{" "}
      </p>
      <p>- Cuando cambian de nombre al equipo.</p>
      <p>- Cuando cambiar la tarjeta del equipo.</p>
      <p>
        - Ocasionalmente al actualizar el windows, si modifican alguna
        caracteristica del equipo.
      </p>
      <p>- Al copiar el archivo XXXXXXXXXX.rkv en otro equipo</p>
      <p>
        - Al duplicar el archivo XXXXXXXXXXX.rkv ( donde XXXXXXXXXXX, es el ruc
        o dni del usuario)
      </p>
      <p>En la parte inferior compartimos los procesos - manuales:</p>
      <h1 className="font-bold">
        ¿Como proceder para activar su real key - virtual ?
      </h1>
      <h1 className="font-bold">
        ¿Como proceder para desactivar - anular su real key - virtual?
      </h1>
      <h1 className="font-bold">
        ¿Como realizar el proceso de actualizacion del Concar CB - Virtual?
      </h1>
      <TablaDocumentosRelacionados items={data} />
    </div>
  );
};

export default page;
