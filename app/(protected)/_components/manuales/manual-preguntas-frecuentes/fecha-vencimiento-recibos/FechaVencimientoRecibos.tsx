import Image from "next/image";
import React from "react";

const FechaVencimientoRecibos = () => {
  return (
    <>
      <div className="py-5">
        <h1 className="font-bold">Descripción del problema</h1>
        <p>
          Al intentar generar el archivo electrónico de Registro de Compras sale
          error por no tener configurada y/o ingresada la fecha de vencimiento
          en los recibos de servicios públicos código de documento SUNAT 14.
        </p>
      </div>
      <div>
        <h1 className="font-bold">Solución al problema</h1>
        <ul>
          <li>
            1. Verificar que las cuentas contables de provisión (normalmente una
            cuenta 42) donde registramos los recibos de servicios públicos
            tengan activado el check de Fecha Vencimiento en el Plan de Cuentas.
          </li>
          <Image
            src="/fechaVencimientoRegistros/1.jpg"
            alt="1"
            width={700}
            height={500}
          />
          <p>
            Si no lo tuviera, tendría que activarse, para luego abrir y
            modificar los comprobantes donde se hubieran registrado los recibos
            de servicios públicos para agregar en la cuenta mencionada, la fecha
            de vencimiento.
          </p>
          <li>
            2. Verificar que el tipo documento RC Recibo de Servicios Públicos
            tenga activado el check en la pestaña Documentos del Mantenimiento
            de Parámetros de Compras.
          </li>
          <Image
            src="/fechaVencimientoRegistros/2.jpg"
            alt="2"
            width={700}
            height={500}
          />
          <li>
            3. Volver a generar el Registro de Compras y ya debe salir la fecha
            de vencimiento tanto el reporte impreso como en el libro
            electrónico.
          </li>
        </ul>
      </div>
    </>
  );
};

export default FechaVencimientoRecibos;
