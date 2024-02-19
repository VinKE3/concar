import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Caso Practico - Carga masiva de compras e-CONCAR PRO",
      href: "https://miconcar.com/uploads/documentos/1039_C1039_D01026.1_caso_practico_carga_masiva_compras_en_el__econcar_pro_v2020.04.pdf",
    },
    {
      id: 2,
      title: "Como se realiza la carga masiva de Compras por el e-CONCAR PRO",
      href: "https://miconcar.com/uploads/documentos/1039_Cod.1039_D01026_C%C3%B3mo_se_realiza_la_carga_masiva_de_compras_en_el_sistema_e-CONCAR_PRO.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Descripción del problema</h1>
      <p>
        Mensaje de error: Cuenta Inafecta ZIN 60919 no existe en Plan de Cuentas
        al realizar el proceso de Generación de Registro de Compras.
      </p>
      <Image
        alt="Contabilizar Factura Electronica en e-CONCAR PRO"
        src="/compras/zin.jpg"
        width={400}
        height={400}
      />
      <h1 className="font-bold">Solución al problema</h1>
      <p>
        Entrar a la opción Reportes/ Registro Compras/ Mantenimiento Parámetros
        Compras Pestaña Cuentas Gasto Inaf. y eliminar la cuenta 60919: .
      </p>
      <Image
        alt="Contabilizar Factura Electronica en e-CONCAR PRO"
        src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_cuenta_inafecta_zin_60919_1_.jpg"
        width={650}
        height={650}
      />
      <p>Sí.</p>
      <p>Luego volver a generar el Registro de Compras.</p>
    </div>
  );
};

export default page;
