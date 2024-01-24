import Image from "next/image";
import React from "react";

const TransfierePendientes = () => {
  return (
    <div className="space-y-3">
      <p>
        Esta opción permite transferir documentos no conciliados de años
        anteriores. Se requiere haber realizado la conciliación bancaria
        definitiva de todos los meses del ejercicio anterior.
      </p>
      <p>Seleccionada esta opción el sistema mostrará la siguiente pantalla:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_9_6_transfiere_pendientes_anno_1_.jpg"
        alt="Transferencia Pendientes"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start">
        <h1>Hacer clic en</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_9_6_transfiere_pendientes_anno_2_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={400}
          height={100}
        />
      </div>
      <p>Al finalizar el proceso, debe salir el siguiente mensaje:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_9_6_transfiere_pendientes_anno_3_.jpg"
        alt="Transferencia Pendientes"
        width={400}
        height={500}
      />
    </div>
  );
};

export default TransfierePendientes;
