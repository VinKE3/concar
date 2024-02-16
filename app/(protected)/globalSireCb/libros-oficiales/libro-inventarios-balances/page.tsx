import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "ibros de Inventarios y Balances",
      href: "https://miconcar.com/uploads/documentos/86_CONCAR_CB_Libro_de_inventarios_y_balances.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Libros de Inventarios y Balances</h1>
      <p className="font-bold">
        Formato 3.2 Libro de Inventarios y Balances – Detalle del Saldo de la
        Cuenta 10-Caja y Bancos
      </p>
      <p>
        Muestra el formato oficial de Inventarios y Balances por saldo de la
        cuenta Caja y Bancos.
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_c7_15_libros_inventarios_y_balances_1_.jpg"
        width={550}
        height={550}
      />

      <Table items={data} />
    </div>
  );
};

export default page;
