import Image from "next/image";
import React from "react";

const ActualizarRealKey = () => {
  return (
    <div className="space-y-3">
      <p>
        Mediante esta opción actualizará la licencia de su Real Key una vez
        vencido el plazo de contrato.{" "}
      </p>
      <p>
        Esta opción permitirá la actualización de la licencia de la Real Key una
        vez vencido el plazo de contrato. Cuando hiciera la renovación, se le
        enviará a su correo un archivo con extensión *.rhk el cual deberá pegar
        en la carpeta donde tuviera instalado el CONCAR® SQL
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_13_1_actualizar_real_key_1_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />

      <p>Presionar el botón Abrir y de esta manera actualizará su licencia.</p>
    </div>
  );
};

export default ActualizarRealKey;
