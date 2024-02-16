import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "¿Se pueden crear ejercicios anteriores en la misma compañía?",
      href: "https://miconcar.com/uploads/documentos/784_CONCAR_CB_Se_pueden_crear_ejercicios_anteriores_en_la_misma_compa%C3%B1ia.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso:</h1>
      <p>Usuario y Contraseña (Password) de Acceso al Sistema.</p>
      <h1 className="font-bold">Solución:</h1>
      <p>
        Por defecto, el sistema solo viene con el usuario SIST con password
        NORTON (ambos en mayúscula). Tanto el usuario como el password pueden
        ser modificados o eliminados posteriormente, también se pueden crear
        nuevos usuarios.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_cb_contrase%C3%B1a_1.jpg"
        alt="1"
        width={500}
        height={500}
      />
      <Table items={data} />
    </div>
  );
};

export default page;
