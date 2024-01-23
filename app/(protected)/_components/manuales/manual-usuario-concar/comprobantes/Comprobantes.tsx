import Image from "next/image";
import React from "react";
import { dataManualUsuario } from "@/data/manuales.data";
import List from "@/components/List";

const Comprobantes = () => {
  const newData = dataManualUsuario.slice(20, 34);
  return (
    <div className="space-y-3">
      <p>
        El módulo de comprobantes permite ingresar las operaciones del día a día
        en el sistema para lo cual deberá tener configuradas las bases de datos
        indicadas en el menú Archivos.
      </p>
      <p>
        En el sistema se puede registrar de forma automática los asientos
        contables tipo (Compras, compras contado, ventas, honorarios, cheques)
        seleccionando la opción correspondiente. También permite ingresar
        operaciones bancarias cuyos asientos se pueden automatizar con la opción
        Comprobante de Bancos.
      </p>
      <p>
        El registro de asientos contables en forma manual (ingresando las
        cuentas de cargo y abono) se pueden ingresar a través de las opciones
        Comprobante Estándar con Conversión y Comprobante Estándar sin
        Conversión. Mediante estas opciones podemos registrar el asiento de
        apertura o cualquier otro asiento de diario.
      </p>
      <p>Las opciones definidas en el menú Comprobantes son las siguientes:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_c5_menu_comprobantes_.jpg"
        alt="Comprobantes"
        width={600}
        height={600}
      />
      <h1 className="font-bold underline">Creación de Comprobantes</h1>
      <p>
        Al seleccionar cualquiera de las opciones del módulo Comprobantes, el
        sistema mostrará la siguiente ventana:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_c5_numeracion_.jpg"
        alt="Comprobantes"
        width={600}
        height={600}
      />
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_c5_si_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={100}
          height={100}
        />
        <h1>: El sistema enumerará el comprobante</h1>
      </div>
      <p>automáticamente de acuerdo a la siguiente estructura:</p>
      <ul className="list-disc px-4">
        <li>
          En la primera casilla, los 2 dígitos indicarán el subdiario utilizado
          para el registro.
        </li>
        <li>
          En la segunda casilla:
          <ul className="list-decimal">
            <li>Los dos primeros dígitos indicarán el mes contable</li>
            <li>
              Los cuatro siguientes dígitos será un número correlativo desde el
              0001 hasta el 9999.
            </li>
          </ul>
        </li>
        <p></p>
      </ul>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_c5_no_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={100}
          height={100}
        />
        <h1>: El sistema le pedirá un número de</h1>
      </div>
      <p>comprobante el cual deberá ingresar en el campo Comprobante.</p>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_c5_cancelar_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={100}
          height={100}
        />
        <h1> : El sistema cerrará la ventana que haya</h1>
      </div>
      <p>seleccionado para registrar el comprobante.</p>
      <h1 className="font-bold underline">Modificación de Comprobantes</h1>
      <p>
        Para modificar un comprobante deberá reabrirlo en la clasificación que
        le corresponda, según la imagen mostrada abajo:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_c5_comprobantes_sin_con_conversion_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={600}
        height={600}
      />
      <p>
        Nota: Los comprobantes registrados mediante la opción Comprobante
        Compras Contado se modificarán por esa misma opción.
      </p>
      <p>A continuación el detalle de las opciones de este módulo:</p>
      <List items={newData} />
    </div>
  );
};

export default Comprobantes;
