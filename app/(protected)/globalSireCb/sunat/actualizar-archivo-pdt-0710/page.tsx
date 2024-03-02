import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "como actualizar el plan de cuentas sunat para el pdt 0710 renta anual ejercicio 2023",
      href: "https://miconcar.com/uploads/documentos/1165_Cod.1165_D01152_como_actualizar_el_plan_de_cuentas_sunat_para_el_pdt0710_renta_anual_ejercicio_2021_concarsql1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Esto aplica para compañías nuevas (que nunca generaron o cargaron el
        plan de cuentas SUNAT)
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
