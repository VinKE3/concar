import Image from "next/image";
import React from "react";

const InformacionRealKey = () => {
  return (
    <div className="space-y-3">
      <p>
        El sistema le mostrará las características (Número de serie, número de
        licencias y los días en los que se vence el convenio de soporte) de la
        Real Key (Llave electrónica) conectada al equipo.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_13_1_actualizar_real_key_2_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={700}
        height={500}
      />
    </div>
  );
};

export default InformacionRealKey;
