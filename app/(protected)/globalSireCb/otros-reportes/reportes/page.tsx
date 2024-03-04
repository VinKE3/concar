import List from "@/components/List";
import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const Reportes = () => {
  const data = [
    {
      id: 1,
      title: "7.01 Balances",
      href: "/globalSireCb/libros-oficiales/balances",
    },
    {
      id: 2,
      title: "7.02 Ganancias y Pérdidas",
      href: "/globalSireCb/libros-oficiales/ganancias-perdidas",
    },
    {
      id: 3,
      title: "7.03 Costos",
      href: "/globalSireCb/libros-oficiales/costos",
    },
    {
      id: 4,
      title: "7.04 Diarios",
      href: "/globalSireCb/libros-oficiales/mayor-analitico",
    },
    {
      id: 5,
      title: "7.05 Mayores",
      href: "/globalSireCb/libros-oficiales/mayor-general",
    },
    {
      id: 6,
      title: "7.06 Registro Ventas",
      href: "/globalSireCb/libros-oficiales/diario",
    },
    {
      id: 7,
      title: "7.07 Registro Compras",
      href: "/globalSireCb/libros-oficiales/compras",
    },
    {
      id: 8,
      title: "7.08 Libro de Caja/Bancos",
      href: "/globalSireCb/libros-oficiales/ventas",
    },
    {
      id: 9,
      title: "7.09 Flujo Efectivo",
      href: "/globalSireCb/libros-oficiales/inventario",
    },
    {
      id: 10,
      title: "7.10 Estado Cambio Patrimonio Neto",
      href: "/globalSireCb/libros-oficiales/caja-bancos",
    },
    {
      id: 11,
      title: "7.11 Áreas",
      href: "/globalSireCb/libros-oficiales/flujo-efectivo",
    },
    {
      id: 12,
      title: "7.12 Bancos",
      href: "/globalSireCb/libros-oficiales/estado-cambios-patrimonio",
    },
    {
      id: 13,
      title: "7.13 Reportes de Ingresos y Gastos",
      href: "/globalSireCb/libros-oficiales/estado-situacion-financiera",
    },
    {
      id: 14,
      title: "7.14 Estado de Resultados",
      href: "/globalSireCb/libros-oficiales/estado-resultados",
    },
    {
      id: 15,
      title: "7.15 Libros de Inventarios y Balances",
      href: "/globalSireCb/libros-oficiales/estado-flujo-efectivo",
    },
    {
      id: 16,
      title: "7.16 Ratios",
      href: "/globalSireCb/libros-oficiales/estado-flujo-efectivo",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Este módulo permite emitir los reportes de resultado en base a los datos
        ya ingresados en los asientos contables. Para visualizar estos reportes
        deberá realizar previamente el Proceso de Consolidación, excepto para
        ver los registros de compras y ventas que tienen su propio proceso:
        Genera archivo mensual compras y Genera archivo mensual ventas.
      </p>
      <p>
        Todos los reportes pueden ser visualizados en la pantalla antes de ser
        impresos. También es posible archivarlo en disco para posteriormente
        imprimirlos o importarlos a cualquier hoja de cálculo sin tener que
        reprocesar el mes.
      </p>
      <p>
        Como el CONCAR es bimoneda, los reportes pueden ser emitidos en dólares
        o soles; según la moneda que indique el usuario.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_cb_menu_reportes_.jpg"
        width={700}
        height={400}
        alt=""
      />
      <p>A continuación los enlaces a las opciones de este módulo:</p>
      <List items={data} />
    </div>
  );
};

export default Reportes;
