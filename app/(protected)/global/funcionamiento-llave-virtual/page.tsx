import React from "react";

const page = () => {
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
    </div>
  );
};

export default page;
