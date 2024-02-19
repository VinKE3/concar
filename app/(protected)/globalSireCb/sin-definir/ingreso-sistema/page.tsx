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
      <p>El usuario deberá ingresar:</p>
      <ul className="list-disc px-5">
        <li>Usuario: Nombre del usuario. Por defecto SIST</li>
        <li>Password: Clave secreta. Por defecto NORTON.</li>
        <li>
          Compañía: Seleccionar la compañía en la cual se correrá la planilla.
        </li>
        <li>
          Tipo de planilla: Seleccionar el tipo de planilla a procesar (“1”
          Empleados, “2” Obreros)
        </li>
      </ul>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/Placar_cb_con_real_key_asientos_de_planilla_1.0_54_.png"
        width={500}
        height={500}
      />
      <p>
        Para pasar de un campo a otro deberá presionar la tecla Enter. No deberá
        usar el mouse ni la tecla Tab, de ese modo se habilitarán los campos.
        Una vez completados los datos pulse el botón “Aceptar” para ingresar al
        sistema.
      </p>
      <p>La pantalla de acceso al sistema es la siguiente:</p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/Placar_cb_con_real_key_asientos_de_planilla_1.0_55_.png"
        width={600}
        height={600}
      />
    </div>
  );
};

export default page;
