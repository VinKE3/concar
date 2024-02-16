import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Configuración de Libros",
      href: "https://miconcar.com/uploads/documentos/49_CONCAR_CB_Configuracion_de_libros.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>En esta opción se configuran los reportes Formatos SUNAT::</p>
      <p>
        3.9 Libro de Inventarios y Balances - Detalle del saldo de la Cuenta 34
        – Intangibles
      </p>
      <p>
        3.15 Libro de Inventarios y Balances - Detalle del saldo de la cuenta 49
        - Ganancias Diferidas
      </p>
      <p>
        3.16 Libro de Inventarios y Balances - Detalle del saldo de la cuenta 50
        – Capital
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
