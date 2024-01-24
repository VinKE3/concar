import Image from "next/image";
import React from "react";
import { dataManualUsuario } from "@/data/manuales.data";
import List from "@/components/List";

const ConciliacionBancaria = () => {
  const newData = dataManualUsuario.slice(65, 71);
  return (
    <div className="space-y-3">
      <p>
        El módulo de Conciliación Bancaria permite realizar la conciliación de
        movimientos comparando lo registrado en los comprobantes contables de
        bancos y lo que reporta el banco vía el estado de cuenta bancario, a una
        fecha determinada. Es posible realizar la carga de los estados de cuenta
        desde archivos Excel enviados por el banco utilizando el sistema
        CONCAR.Net.
      </p>
      <p>El sistema considera lo siguiente en la conciliación:</p>
      <ul className="px-6 list-disc">
        <li>
          Los Cheques se compraran por banco, 4 últimos dígitos del número e
          importe.
        </li>
        <li>
          Los otros documentos (entregas, notas de cargo y abono) se comparan
          por banco, fecha e importe.
        </li>
        <li>
          Cuando se produce la igualdad en la comparación el sistema considera
          al movimiento como “CANCELADO”.
        </li>
      </ul>
      <p>El procedimiento de conciliación es el siguiente:</p>
      <ul className="px-6 list-disc">
        <li>
          Carga inicial de Conciliación, sólo la primera vez que se va utilizar
          el proceso.
        </li>
        <li>Registro del Estado de Cuenta.</li>
        <li>Conciliación Previa.</li>
        <li>Corrección de Movimientos Contables.</li>
        <li>Conciliación Definitiva.</li>
      </ul>
      <p>
        Las opciones definidas en el menú Conciliación Bancaria son las
        siguientes:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_c9_conciliacion_bancaria_.jpg"
        alt="Conciliacion Bancaria"
        width={500}
        height={500}
      />
      <p>A continuación el detalle de las opciones de este módulo:</p>
      <List items={newData} />
    </div>
  );
};

export default ConciliacionBancaria;
