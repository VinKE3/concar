import TablaDocumentosRelacionados from "@/components/TablaDocumentosRelacionados";
import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Inicialización Balance",
      description:
        "Esta opción inicializa los archivos de balance, centros de costos, cuentas automáticos y movimiento mensual. La ventana de la opción indica los casos en que se debe pro...",
      href: "",
    },
    {
      id: 1,
      title: "Proceso Consolidación",
      description:
        "Este proceso realiza en forma específica lo siguiente: • Actualiza los saldos de las cuentas • Genera las cuentas automáticas de destinos • Revisa que todos los c...",
      href: "",
    },
    {
      id: 1,
      title: "Reindexar Bases Datos Comunes",
      description:
        "Esta opción permite reordenar, entre otras, las siguientes bases de datos: • Tipos de Cambio • Tabla de Compañías • Tabla de Usuarios, Usuarios-Programas, Usuari...",
      href: "",
    },
    {
      id: 1,
      title: "Reindexar Bases Datos Mensuales",
      description:
        "Esta opción permite reordenar, entre otras, las siguientes bases de datos: • Movimiento Mensual • Conciliación Bancaria • Regularización y Ajuste por Diferencia ...",
      href: "",
    },
    {
      id: 1,
      title: "Reindexar Bases Datos Movimientos",
      description:
        "Esta opción permite reordenar, entre otras, las siguientes bases de datos: • Cabecera y Detalle de Comprobantes Contables • Numeración de Comprobantes • Estados d...",
      href: "",
    },
    {
      id: 1,
      title: "Reindexar Bases Datos Principales",
      description:
        "Esta opción permite reordenar, entre otras, las siguientes bases de datos: • Plan de Cuentas • Tablas Generales • Anexos • Tabla de Transferencia • Tabla de Ci...",
      href: "",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Descripción del problema</h1>
      <p>
        Las cuentas del balance de comprobación muestran saldos inconsistentes.
      </p>
      <h1 className="font-bold">Solución al problema</h1>
      <p>
        Ejecutar los siguientes procesos (nadie debe estar trabajando en el
        sistema):
      </p>
      <ul className="list-decimal px-5">
        <li>
          Inicializar Balance: Opción Utilitarios/Inicialización Balance. Clic
          en Inicializar.
        </li>
        <li>
          Reindexar: Opciones Utilitarios/Reindexar Bases de Datos. Ejecutar las
          4 opciones de reindexado dándole en clic en Aceptar.
        </li>
        <li>
          Realizar proceso mensual de Consolidación (Consolidación/Proceso
          Consolidación) desde el mes de Enero al último mes que tiene
          movimientos.
        </li>
        <li>
          Generar Archivo de Saldos: Opción Análisis Cuenta/Generación Archivo
          Saldo Documento. Ingresar el último día del último mes consolidado y
          hacer clic en Procesar.
        </li>
      </ul>
      <p>
        Como referencia ver forma de realizar los procesos en los Documentos
        Relacionados.
      </p>
      <TablaDocumentosRelacionados items={data} />
    </div>
  );
};

export default page;
