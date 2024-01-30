import Image from "next/image";
import React from "react";

const ConcarNoResponde = () => {
  return (
    <>
      <div className="space-y-2">
        <h1 className="font-bold">Descripción del problema</h1>
        <p>l darle doble clic al acceso del CONCAR no carga el sistema.</p>
      </div>
      <div className="space-y-2">
        <h1 className="font-bold">Descripción del problema</h1>
        <p>
          Darle un clic derecho al acceso y elegir la opción Ejecutar como
          Administrador.
        </p>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_preguntas_frecuentes_concar_no_responde_.jpg"
          alt="Concar no responde"
          width={500}
          height={500}
        />
      </div>
    </>
  );
};

export default ConcarNoResponde;
