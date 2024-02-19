import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Que contiene la Tabla General",
      href: "https://miconcar.com/uploads/documentos/1062_Cod.1062_D01049_que_contiene_la_tabla_general.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Esta opción permite configurar parámetros del sistema los mismos que se
        guardan en el Mantenimiento de Tablas Generales - Tabla 93.
      </p>
      <p>Seleccionada la opción el sistema mostrará la siguiente pantalla:</p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_14_parametrizacion_general_del_sistema_.jpg"
        width={550}
        height={550}
      />
      <p>En ella se pueden activar o desactivar las opciones siguientes:</p>
      <ul className="list-disc px-5">
        <li>
          {" "}
          Generación Archivo Mensual Ventas Inafectos y Exonerados: Si se activa
          esta opción el sistema separa los ingresos por ventas inafectas de las
          exoneradas en el Registro de Ventas.
        </li>
        <li>
          Distribución por Centros de Costos: Si se activa esta opción el
          sistema activará el C.Costo a Distribuir en la Tabla de Transferencia
          al crear una distribución porcentual:
        </li>
      </ul>
      <h1>TEMA: Qué contiene la Tabla General</h1>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_14_creacion_.jpg"
        width={550}
        height={550}
      />
      <p>
        El efecto que tendrá será que, después de realizar la Consolidación, el
        sistema cambiará el centro de costo 900 utilizado en el comprobante, por
        el centro de costo 200 tomando el 50% del total ingresado para este
        ejemplo.
      </p>
      <p>
        Centros de costos en todas las cuentas: Al activar esta opción el
        sistema permitirá utilizar centros de costos en todas las cuentas del
        plan de cuentas
      </p>
      <ul className="list-disc px-5">
        <li>
          Detracciones en compras: Al activar esta opción el sistema permitirá
          ingresar detracciones en los comprobantes de compras.
        </li>
        <li>
          Control de Retenciones: Al activar esta opción el sistema controlará
          retenciones en compras. Este check sólo activará en el caso la
          compañía fuera AGENTE DE RETENCIÓN y tenga configurados los parámetros
          para retenciones en la tabla general 57.
        </li>
        <li>
          Reporte adicional en análisis de Cuenta: Activa en el menú de Análisis
          Cuenta\Reporte Estados de Cuenta la opción Cuenta – Anexo con Cuentas
          Automáticas CTDOCU06.
        </li>
      </ul>
      <p>Una vez realizados los cambios presionar el botón</p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_14_boton_grabar_.jpg"
        width={70}
        height={70}
      />
    </div>
  );
};

export default page;
