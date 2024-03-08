import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso</h1>
      <p>
        Qué hacer cuando en el formato 8.1 registro de compras se muestra el
        proveedor incompleto, en alguno de estos tres casos:
      </p>
      <h1 className="font-bold">
        1. No se ve tipo, ni número de documento de identidad
      </h1>
      <Image
        alt="proveedor-incompleto-registro-compras"
        src="https://miconcar.com/uploads/documentos/concar_cb_registro_compras_anexo_1_.jpg"
        width={500}
        height={500}
      />
      <h1 className="font-bold">2. No se ve razón social</h1>
      <Image
        alt="proveedor-incompleto-registro-compras"
        src="https://miconcar.com/uploads/documentos/concar_cb_registro_compras_anexo_3_.jpg"
        width={500}
        height={500}
      />
      <h1 className="font-bold">
        3. No se ve tipo, ni número de documento de identidad, tampoco razón
        social
      </h1>
      <Image
        alt="proveedor-incompleto-registro-compras"
        src="https://miconcar.com/uploads/documentos/concar_cb_registro_compras_anexo_5_.jpg"
        width={500}
        height={500}
      />
      <h1 className="font-bold">Solución</h1>
      <p>
        En todos los casos la solución es corregir la configuración del anexo en
        el Mantenimiento de Anexos y volver a generar el archivo mensual de
        compras antes de emitir nuevamente el formato 8.1. Registro de Compras.
        La solución en cada caso específico se detalla a continuación:
      </p>
      <h1 className="font-bold">
        1. No se ve tipo, ni número de documento de identidad
      </h1>
      <p>
        Sucede porque el tipo y número de documento para el proveedor estan
        vacíos. Se soluciona configurando los datos remarcados en la imagen:
      </p>
      <Image
        alt="proveedor-incompleto-registro-compras"
        src="https://miconcar.com/uploads/documentos/concar_cb_registro_compras_anexo_2_1.jpg"
        width={500}
        height={500}
      />
      <h1 className="font-bold">2. No se ve razón social</h1>
      <p>
        Sucede porque el tipo de persona para el proveedor no es correcto. Se
        soluciona configurando los datos remarcados en la imagen:
      </p>
      <Image
        alt="proveedor-incompleto-registro-compras"
        src="https://miconcar.com/uploads/documentos/concar_cb_registro_compras_anexo_4_1.jpg"
        width={500}
        height={500}
      />
      <h1 className="font-bold">
        3. No se ve tipo, ni número de documento de identidad, tampoco razón
        social
      </h1>
      <ul className="px-5 list-disc">
        <li>
          Si el proveedor es persona jurídica, seguir las soluciones indicadas
          para los casos 1 y 2.
        </li>
        <li>
          Si el proveedor es persona natural, completar los campos: Apellido
          Paterno, Apellido Materno y Nombre del Mantenimiento de Anexos. Para
          CONCAR CB, estos campos se encuentran en la pestaña Datos
          Complementarios y para CONCAR SQL, en Datos Principales.
        </li>
      </ul>
    </div>
  );
};

export default page;
