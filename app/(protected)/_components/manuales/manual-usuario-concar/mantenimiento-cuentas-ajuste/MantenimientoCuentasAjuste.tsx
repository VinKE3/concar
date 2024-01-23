import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const MantenimientoCuentasAjuste = () => {
  const data = [
    {
      id: 1,
      title: "Mantenimiento de Cuentas Ajuste Diferencia de Cambio FASB52",
      href: "https://miconcar.com/uploads/documentos/305_4.14._CONCAR_SQL_Mantenimiento_de_Cuentas_Ajuste_Diferencia_de_Cambio_FASB_52_305-D00302.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        En esta opción se configuran las cuentas que van a participar en el
        proceso de Ajuste Diferencia Cambio FASB 52 además del subdiario, las
        cuentas de pérdida y ganancia por diferencia de cambio y el código de
        moneda para ajuste.
      </p>
      <p>Se dispone de la opción de: </p>
      <p>1. Mostrar todas las cuentas</p>
      <p>2. Filtrar las cuentas que se ajustarán</p>
      <p>
        Al ingresar a esta opción el sistema mostrará la siguiente pantalla:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_4_14_mantenimiento_de_ctas_ajuste_de_tipo_de_cambio_FASB52_1_1.jpg"
        alt="Mantenimiento Cuentas Ajuste"
        width={600}
        height={600}
      />
      <p>
        En esta pantalla se activarán las cuentas contables de activo y pasivo
        registradas en el Plan de Cuentas. Para activar los casilleros, tendrá
        que hacer doble clic en los recuadros. Asimismo, puede exportar a un
        Excel el
      </p>
      <div className="flex items-center justify-start">
        <h1>
          reporte de cuentas asignadas para regularización, haciendo clic en
        </h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_13_mantenimiento_de_cuenta_regularizacion_diferecia_de_cambio_2_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
      </div>
      <p>
        También puede modificar el subdiario, las cuentas que utilizará el
        sistema para generar el asiento de diferencia de
      </p>
      <div className="flex items-center justify-start">
        <h1>cambio y la moneda para ajuste seleccionando el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_cb_c7_6_registro_ventas_3_3.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
        <h1> y luego</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_cb_c10_5_tranfiere_pendientes_ano_anterior_2_6.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
      </div>
      <Table items={data} />
    </div>
  );
};

export default MantenimientoCuentasAjuste;
