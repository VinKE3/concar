import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const MantenimientoCuentasRegularizacion = () => {
  const data = [
    {
      id: 1,
      title: "Mantenimiento de Cuentas Regularización Diferencia de Cambio",
      href: "https://miconcar.com/uploads/documentos/304_4.13._CONCAR_SQL_Mantenimiento_de_Cuentas_Regularización_Diferencia_de_Cambio_304-D00301.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        En esta opción se configuran las cuentas que van a participar en el
        proceso de Regularización Diferencia de Cambio además del subdiario y
        las cuentas de pérdida y ganancia por diferencia de cambio.
      </p>
      <p>Se dispone de la opción de:</p>
      <p>a) Mostrar todos las cuentas</p>
      <p>b) Filtrar las cuentas que se regularizarán</p>
      <p>
        Al ingresar a esta opción el sistema mostrará la siguiente pantalla:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_4_13_mantenimiento_de_cuenta_regularizacion_diferecia_de_cambio_1_.jpg"
        alt="Mantenimiento Cuentas Regularizacion"
        width={600}
        height={600}
      />
      <p>
        En esta pantalla se activarán las cuentas contables que sufrieran
        variación de tipo de cambio.
      </p>
      <p>
        Para activar los casilleros, tendrá que hacer doble clic en los
        recuadros. Asimismo, puede
      </p>
      <div className="flex items-center justify-start">
        <h1>
          exportar a un Excel el reporte de cuentas asignadas para
          regularización, haciendo clic en
        </h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_13_mantenimiento_de_cuenta_regularizacion_diferecia_de_cambio_2_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
      </div>
      <p>
        También puede modificar el subdiario y las cuentas que utilizará el
        sistema para generar el asiento de diferencia
      </p>
      <div className="flex items-center justify-start">
        <h1>de cambio, seleccionando el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_13_mantenimiento_de_cuenta_regularizacion_diferecia_de_cambio_3_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
        <h1>y luego</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_13_mantenimiento_de_cuenta_regularizacion_diferecia_de_cambio_4_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
      </div>
      <Table items={data} />
    </div>
  );
};

export default MantenimientoCuentasRegularizacion;
