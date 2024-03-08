import Image from "next/image";
import React from "react";
import List from "@/components/List";

const Archivos = () => {
  const newData = [
    {
      id: 1,
      title: "4.01 Plan de Cuenta",
      href: "/globalSireCb/plan-de-cuentas/plan-cuenta",
    },
    {
      id: 2,
      title: "4.02 Códigos de Anexos",
      href: "/globalSireCb/anexos/codigos-anexos",
    },
    {
      id: 3,
      title: "4.03 Tabla General",
      href: "/globalSireCb/generalidades/tabla-general",
    },
    {
      id: 4,
      title: "4.04 Tipo de Cambio",
      href: "/globalSireCb/generalidades/tipo-cambio",
    },
    {
      id: 5,
      title: "4.05 Tabla de Transferencia",
      href: "/globalSireCb/generalidades/tabla-transferencia",
    },
    {
      id: 6,
      title: "4.06 Numeración de comprobantes",
      href: "/globalSireCb/comprobantes/numeracion-comprobantes",
    },
    {
      id: 7,
      title: "4.07 Tabla de Cierre",
      href: "/globalSireCb/cierre-apertura/tabla-cierre",
    },
    {
      id: 8,
      title: "4.08 Mantenimiento Cuentas Bancos",
      href: "/globalSireCb/bancos/mantenimiento-cuentas-bancos",
    },
    {
      id: 9,
      title: "4.09 Tabla Índices Inflación",
      href: "",
    },
    {
      id: 10,
      title: "4.10 Mantenimiento Tipo pago por programa",
      href: "/globalSireCb/presupuesto/mantenimiento-tipo-programa",
    },
    {
      id: 11,
      title: "4.11 Mantenimiento Parámetros Honorarios",
      href: "/globalSireCb/honorarios/mantenimiento-parametros-honorarios",
    },
    {
      id: 12,
      title: "4.12 Configuración de Libros",
      href: "/globalSireCb/libros-oficiales/configuracion-libros",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        El módulo de Archivos permite efectuar el mantenimiento y consulta de
        las bases de datos del sistema. Las bases de datos principales son
        aquellas que mantienen la información relativamente fija en el sistema;
        es decir, que sufren modificaciones muy rara vez y en donde se
        encuentran todos los datos que caracterizan a la empresa.
      </p>
      <p>
        Las bases de datos principales definidas para el sistema de Contabilidad
        General (menú Archivos) son las siguientes:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_cb_menu_archivos_.jpg"
        alt="Archivos"
        width={700}
        height={500}
      />
      <p>A continuación el detalle de las opciones de este módulo:</p>
      <List items={newData} />
    </div>
  );
};

export default Archivos;
