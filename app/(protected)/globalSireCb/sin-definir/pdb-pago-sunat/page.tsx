import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="space-y-3">
      <h1 className="font-bold">10.1.1 MANTENIMIENTO SUBDIARIO DE PDB PAGOS</h1>
      <h1 className="font-bold">I. CONFIGURACIÓN PREVIA:</h1>
      <p>
        En esta opción se realiza el mantenimiento de los subdiarios que se van
        a incluir en el proceso de pagos del PDB Exportadores.
      </p>
      <p>
        Se deberá de registrar en la Tabla 95 del SISPAG SQL, los subdiarios que
        deberán ser considerados en el proceso de pago.
      </p>
      <h1 className="font-bold">II. PROCESO:</h1>
      <p>Ejecutar dicha opción y seleccionar los subdiarios requeridos:</p>
      <Image
        alt="Mantenimiento Subdiario de PDB Pagos"
        src="https://miconcar.com/uploads/documentos/manual_sispag_sql_c282_1_mantenimiento_subdiario_de_pdb_pagos_cpppdb01_.jpg"
        width={500}
        height={500}
      />
      <div className="flex space-x-2">
        <p>Presionar el botón </p>
        <Image
          alt="Mantenimiento Subdiario de PDB Pagos"
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_guardar_1.jpg"
          width={50}
          height={50}
        />
      </div>
      <p>
        seleccionados en una nueva tabla (P5) Subdiarios PDB Pagos del SISPAG.
      </p>
      <Image
        alt="Mantenimiento Subdiario de PDB Pagos"
        src="https://miconcar.com/uploads/documentos/manual_sispag_sql_c282_1_p5_subdiarios_pdb_pagos_.jpg"
        width={500}
        height={500}
      />
      <h1 className="font-bold">
        10.1.2 GENERACIÓN ARCHIVO PAGOS PDB PAGOS SUNAT
      </h1>
      <p>
        Proceso que generar el archivo PDB pagos para la SUNAT en formato texto
        de acuerdo a las especificaciones de la SUNAT.
      </p>
      <h1 className="font-bold">I. CONFIGURACIONES PREVIAS:</h1>
      <p>
        1) En el CONCAR SQL: Es obligatorio especificar el Medio de Pago, por lo
        cual se deberá de definir en la Tabla General S1 del CONCAR SQL, los
        tipos de medio de pago según SUNAT, tal como se muestra en la siguiente
        captura:
      </p>
      <Image
        alt="Mantenimiento Subdiario de PDB Pagos"
        src="https://miconcar.com/uploads/documentos/manual_sispag_sql_c282_1_tablas_s1_tipo_de_medio_de_pago_.jpg"
        width={500}
        height={500}
      />
      <p>
        Adicionalmente, se deberá activar el casillero de {"Tipo Medio de Pago"}
        en el caso de las cuentas 10x. Por ejemplo: 104101 Banco Interbank MN.
      </p>
      <Image
        alt="Mantenimiento Subdiario de PDB Pagos"
        src="https://miconcar.com/uploads/documentos/manual_sispag_sql_c282_1_modificacion_.jpg"
        width={500}
        height={500}
      />
      <p>
        2) En el SISPAG SQL: Se determinarán los procesos que solicitarán estos
        medios de pagos en la opción Mantenimiento Tipo Pago por Programa.
      </p>
      <Image
        alt="Mantenimiento Subdiario de PDB Pagos"
        src="https://miconcar.com/uploads/documentos/manual_sispag_sql_c282_1_mantenimiento_de_medio_de_pago_por_programa_cppagp01_.jpg"
        width={500}
        height={500}
      />
      <p>
        De la misma manera, si se ingresará a la opción Mantenimiento Cuenta
        Bancos.
      </p>
      <Image
        alt="Mantenimiento Subdiario de PDB Pagos"
        src="https://miconcar.com/uploads/documentos/manual_sispag_sql_c282_1_modificacion_1_.jpg"
        width={500}
        height={500}
      />
      <h1 className="font-bold">II. PROCESO:</h1>
      <p>El sistema solicitará el mes a ejecutar al ingresar a dicha opción:</p>
      <Image
        alt="Mantenimiento Subdiario de PDB Pagos"
        src="https://miconcar.com/uploads/documentos/manual_sispag_sql_c282_1_generacion_archivo_pagos_pdb_pagos_sunat_cpppdb02_.jpg"
        width={500}
        height={500}
      />
      <p>Al finalizar, emitirá un mensaje de confirmación:</p>
      <Image
        alt="Mantenimiento Subdiario de PDB Pagos"
        src="https://miconcar.com/uploads/documentos/manual_sispag_sql_c282_1_rssispag_.jpg"
        width={500}
        height={500}
      />
      <p>Ejemplo del archivo generado:</p>
      <Image
        alt="Mantenimiento Subdiario de PDB Pagos"
        src="https://miconcar.com/uploads/documentos/manual_sispag_sql_c282_1_txt_bloc_de_notas_.jpg"
        width={500}
        height={500}
      />
      <p>
        Si se presentaran errores, el sistema mostrará el mensaje siguiente:
      </p>
      <Image
        alt="Mantenimiento Subdiario de PDB Pagos"
        src="https://miconcar.com/uploads/documentos/manual_sispag_sql_c282_1_errores_.jpg"
        width={500}
        height={500}
      />
      <div className="flex space-x-2">
        <p>Presionar el botón </p>
        <Image
          alt="Mantenimiento Subdiario de PDB Pagos"
          src="https://miconcar.com/uploads/documentos/manual_concar_cb_c15_1_boton_si_8.jpg"
          width={50}
          height={50}
        />
      </div>
      <Image
        alt="Mantenimiento Subdiario de PDB Pagos"
        src="https://miconcar.com/uploads/documentos/manual_sispag_sql_c282_1_print_preview_.jpg"
        width={500}
        height={500}
      />
    </div>
  );
};

export default page;
