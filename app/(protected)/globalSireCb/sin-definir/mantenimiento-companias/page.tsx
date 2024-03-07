import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Mantenimiento de Compañías",
      href: "https://miconcar.com/uploads/documentos/385_CONCAR_SQL_Mantenimiento_de_compañias.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">11.5. MANTENIMIENTO DE COMPAÑÍAS</h1>
      <p>
        La creación de una compañía se utiliza cuando se va a dar inicio a los
        registros en el SISPAG SQL.
      </p>
      <h2 className="font-bold">NOTA:</h2>
      <p>
        Se recomienda tener especial cuidado en la creación de compañías ya que
        una vez creadas, no se podrán eliminar.
      </p>
      <Image
        alt="Mantenimiento de Compañías"
        src="https://miconcar.com/uploads/documentos/manual_sispag_sql_c288_1_mantenimiento_de_companias_cputil05_.jpg"
        width={500}
        height={500}
      />
      <div className="flex">
        <p>Presionar </p>
        <Image
          alt="Mantenimiento de Compañías"
          src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_5_boton_crear_1.jpg"
          width={50}
          height={50}
        />
      </div>
      <Image
        alt="Mantenimiento de Compañías"
        src="https://miconcar.com/uploads/documentos/manual_sispag_sql_c288_1_creacion_de_companias_.jpg"
        width={500}
        height={500}
      />
      <div className="flex">
        <p>Presionar </p>
        <Image
          alt="Mantenimiento de Compañías"
          src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_1_boton_aceptar_4.jpg"
          width={50}
          height={50}
        />
      </div>
      <p>y reingresar a dicha opción</p>
      <Image
        alt="Mantenimiento de Compañías"
        src="https://miconcar.com/uploads/documentos/manual_sispag_sql_c288_1_mantenimiento_de_companias_cputil05_1_.jpg"
        width={500}
        height={500}
      />
    </div>
  );
};

export default page;
