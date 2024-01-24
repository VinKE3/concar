import Image from "next/image";
import React from "react";

const MantenimientoEmpresas = () => {
  return (
    <div className="space-y-3">
      <p>
        Esta opción permite completar datos adicionales al mantenimiento de
        compañías necesarios para emitir el certificado de honorarios.
      </p>
      <h1 className="font-bold">1.5 Mantenimiento de Empresas</h1>
      <p>
        Esta opción permite completar datos adicionales al mantenimiento de
        compañías necesarios para emitir el certificado de honorarios.
      </p>
      <p>Consideraciones Previas:</p>
      <p>Agregar datos necesarios para la emisión del certificado</p>
      <p>Configurar las siguientes Tablas Generales:</p>
      <p>Ir a Archivos\Tabla General \Mantenimiento Tabla General</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_11_4_mantenimiento_de_compania_19_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        Luego ingresar los siguientes datos a esas tablas creadas: Ejemplos:
      </p>
      <p>66 GIRO DE NEGOCIO</p>
      <p>01 COMERCIAL E INDUSTRIAL</p>
      <p>67 CÓDIGO DE SECTORISTA</p>
      <p>01 SECTORISTA</p>
      <p>87 GRUPO</p>
      <p>01 GRUPO</p>
      <p>Al ingresar a esta opción, aparecerá una ventana como la siguiente:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_11_5_mantenimiento_de_empresas_2_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>En esta pantalla se podrá:</p>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_9_mantenimiento_movimientos_bancos_2_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
        <h1>CREAR (Alt-C)</h1>
      </div>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_9_mantenimiento_movimientos_bancos_3_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
        <h1>MODIFICAR (Alt-M)</h1>
      </div>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_11_5_mantenimiento_de_empresas_5_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
        <h1>ELIMINAR (Alt-E)</h1>
      </div>

      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_9_mantenimiento_movimientos_bancos_5_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
        <h1>CONSULTAR (Alt-T)</h1>
      </div>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_9_mantenimiento_movimientos_bancos_4_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
        <h1>BUSCAR (Alt-B)</h1>
      </div>
      <div className="flex items-center justify-start">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_9_mantenimiento_movimientos_bancos_2_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
      </div>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_11_5_mantenimiento_de_empresas_8_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        CÓDIGO DE LA EMPRESA: Ingresar el código de la compañía registrada en el
        Mantenimiento de Compañías.
      </p>
      <p>
        NOMBRE: Ingresar Nombre en Reporte registrado en el Mantenimiento de
        Compañías.
      </p>
      <p>DIRECCIÓN: Ingresar dirección de la empresa.</p>
      <p>DISTRITO: Ingresar distrito donde se ubica la empresa.</p>
      <p>R.U.C.: Ingresar RUC de la empresa.</p>
      <p>
        GIRO NEGOCIO: Elegir giro de negocio configurado en la Tabla General 66.
      </p>
      <p>
        REPRESENTANTE: Ingresar nombre del representante legal de la empresa.
      </p>
      <p>
        DOCUMENTO REP.: Ingresar tipo y número del documento de identidad del
        representante legal de la empresa.
      </p>
      <p>GRUPO: Elegir grupo configurado en la Tabla General 87.</p>
      <p>
        CAPITAL SOCIAL: Ingresar importe del Capital Social de la empresa. Dato
        opcional.
      </p>
      <p>
        CÓDIGO DE SECTORISTA: Elegir código de sectorista configurado en la
        Tabla General 67.
      </p>
      <p>
        NÚMERO DE EMPLEADOS/OBREROS: Ingresar cantidad de trabajadores. Dato
        opcional.
      </p>
      <p>
        NÚMERO CTA. BANCARIA: Ingresar número de cuenta bancaria. Dato opcional.
      </p>
      <p>TELÉFONO(S)/FAX: Ingresar teléfono y/o fax. Datos opcionales.</p>
      <p>
        CORREO ELECTRÓNICO: Ingresar correo electrónico de la empresa. Dato
        opcional.
      </p>
      <p>RUTA DE BASE DE DATOS DE ACCESOS: No se debe llenar.</p>
      <div className="flex items-center justify-start">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_11_5_mantenimiento_de_empresas_9_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
};

export default MantenimientoEmpresas;
