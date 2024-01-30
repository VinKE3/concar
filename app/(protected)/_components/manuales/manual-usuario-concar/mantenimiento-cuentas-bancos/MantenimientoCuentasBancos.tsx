import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const MantenimientoCuentasBancos = () => {
  const data = [
    {
      id: 1,
      title: "Mantenimiento Cuentas Bancos",
      href: "https://miconcar.com/uploads/documentos/299_4.08._CONCAR_SQL_Mantenimiento_Cuentas_Bancos_299.pdf",
    },
  ];
  return (
    <div className="space-y-4">
      <p>
        En este archivo o base de datos se deberán registrar todas las cuentas
        bancarias que tenga la empresa. Esta opción actualiza simultáneamente la
        Tabla de anexos Bancos (Tipo 0) y es obligatoria su actualización.
      </p>
      <p>
        Si no se crearan las cuentas bancarias por esta opción, no se podrán
        utilizar las opciones de comprobantes de cheques y no saldrán los datos
        completos en el Formato 1.2 Libro Caja y Bancos-Detalle de los
        movimientos de la Cta. Cte. y tampoco en el Libro de Inventario y
        Balances (Formato 3.2) Detalle del saldo de la cuenta 10. También es
        necesario para la generación de los asientos automáticos de
        Regularización Diferencia Cambio y Ajuste Diferencia Cambio FASB52.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_4_8_mantenimiento_cuentas_bancos_1_.jpg"
        alt="Mantenimiento Cuentas Bancos"
        width={650}
        height={500}
      />
      <p>En esta pantalla se podrá</p>
      <div className="flex items-center justify-start gap-1">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_8_mantenimiento_cuentas_bancos_2_.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
        <h1>CREAR (Alt-C)</h1>
      </div>
      <div className="flex items-center justify-start gap-1">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_8_mantenimiento_cuentas_bancos_3_.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
        <h1>MODIFICAR (Alt-M)</h1>
      </div>
      <div className="flex items-center justify-start gap-1">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_8_mantenimiento_cuentas_bancos_4_.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
        <h1>ELIMINAR (Alt-E)</h1>
      </div>
      <div className="flex items-center justify-start gap-1">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_8_mantenimiento_cuentas_bancos_5_.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
        <h1>CONSULTAR (Alt- T)</h1>
      </div>
      <div className="flex items-center justify-start gap-1">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_8_mantenimiento_cuentas_bancos_6_.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
        <h1>GRABAR (Alt-G)</h1>
      </div>
      <div className="flex items-center justify-start gap-1">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_8_mantenimiento_cuentas_bancos_2_.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
      </div>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_4_8_mantenimiento_cuentas_bancos_7_1.jpg"
        alt="Mantenimiento Cuentas Bancos"
        width={650}
        height={500}
      />
      <div>
        <h1 className="font-bold">DATOS PRINCIPALES:</h1>
        <p>CÓDIGO DE CUENTA: Código alfanumérico hasta 8 caracteres.</p>
        <p>DESCRIPCIÓN CUENTA: Nombre de la cuenta.</p>
        <p>NOMBRE BANCO: Nombre de la entidad bancaria</p>
        <p>NÚMERO CUENTA: Número de cuenta bancaria</p>
        <p>
          MONEDA: Desplegar el menú y seleccionar la unidad monetaria de la
          cuenta.
        </p>
        <p>
          MODELO ESTADO CUENTA: Elegir el modelo de Estado de Cuenta sólo si se
          tiene configurada la carga de estados de cuenta en el aplicativo
          CONCAR.Net, de otro modo, dejar en blanco.
        </p>
        <p>ENTIDAD FINANCIERA: Seleccionar la entidad financiera.</p>
        <p>TIPO CTA REPORTE: Seleccionar el tipo de cuenta</p>
        <p>
          ORDEN REPORTE: Se configura sólo si se trabaja con formato de
          cheque-voucher adecuado a medida del cliente.
        </p>
        <p>CUENTA CONTABLE: Seleccionar la cuenta contable.</p>
        <h1 className="font-bold">NOMBRES FIRMANTES:</h1>
        <p>
          NOMBRE FIRMANTE 1-4: Ingresar los nombres de las personas autorizadas
          que firman los cheques
        </p>
      </div>
      <div className="flex items-center justify-start gap-1">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_8_mantenimiento_cuentas_bancos_8_.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
      </div>
      <Table items={data} />
    </div>
  );
};

export default MantenimientoCuentasBancos;
