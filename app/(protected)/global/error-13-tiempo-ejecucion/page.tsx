import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "como superar el mensaje error 13 en tiempo de ejecución en el concar",
      href: "https://miconcar.com/uploads/documentos/1146_Cod.01146_D01133_como_superar_mensaje_error_13_en_tiempo_de_ejecuci%C3%B3n_en_el_concar1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Este tipo de mensaje: Error 13 en Tiempo de Ejecución, se presenta
        cuando algun componente del windows que usa el usuario en su equipo, ha
        sido bloqueado, manipulado, actualizado, quizas involuntariamente al
        momento de dar {"OK"} en algun proceso de actualizacion de su windows
        (ya que los estos se realizan en linea).
      </p>
      <p>
        Lo recomendable es que lo revise su personal de sistemas, ya que sera
        necesario:
      </p>
      <p>- Scanear el equipo</p>
      <p>
        - Reparar el Office, si se presenta al generar algun reporte a Excel
      </p>
      <p>
        Recomendamos seguir los pasos a detalle que figura en nuestro manual;
        como alternativa adicional si persiste revisarlo con su personal tecnico
        o reinstalar el sistema en otro equipo.
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
