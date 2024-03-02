import TablaDocumentosRelacionados from "@/components/TablaDocumentosRelacionados";
import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Descuadre de Estados Financieros después del Costo de Ventas",
      href: "https://miconcar.com/uploads/documentos/734_CONCAR_CB_Descuadre_de_estados_financieros_despues_del_costo_de_ventas.pdf",
    },
  ];
  const data2 = [
    {
      id: 1,
      title:
        "¿Como superar el mensaje de Memory Error y Permisos - Acceso al sistema? - Incluye Video",
      description: "Mensaje Memory Error al ingresar al sistema.",
      href: "/globalSireCb/acceso/superar-mensaje-memory-error-permisos",
    },
    {
      id: 2,
      title: "Verifica Comprobantes",
      description:
        "Esta opción nos permite visualizar aquellos comprobantes que probablemente estén generando un descuadre del resultado en los estados financieros.",
      href: "/globalSireCb/comprobantes/verifica-comprobantes",
    },
  ];
  return (
    <div className="space-y-3">
      <p className="font-bold">Caso</p>
      <p>
        Solución cuando los estados de ganancias y pérdidas (o resultados) y el
        balance no cuadran, además en el reporte de verifica comprobantes no hay
        registros por revisar.
      </p>

      <Table items={data} />
      <TablaDocumentosRelacionados items={data2} />
    </div>
  );
};

export default page;
