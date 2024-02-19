import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "como_registrar_facturas_de_compras_ravadas_y_no_gravadas_inafectas_con_igv10_concarcb",
      href: "https://miconcar.com/uploads/documentos/1183_Cod.1183_D01170_como_registrar_factura_compra_gravadas_y_no_gravadas_igv10.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Para aperturar nuevamente el mes para registros contables, debe realizar
        la Reapertura mes contable para desbloquear el registro en la
        ruta:\Consolidación\Reapertura Mes Contable.
      </p>
      <p>
        Ingrese Nueva Fecha de Consolidación ingrese el último día del mes
        anterior al que se desea reaperturar.
      </p>
      <p>
        Ejemplo: Se ha realizo una Consolidación Definitiva al mes 01-2013 y se
        desea reaperturar dicho mes para realizar registro de comprobantes
        contables:
      </p>
      <Image
        alt="Reapertura mes contable"
        src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_reapertura_mes_contable_.jpg"
        width={500}
        height={500}
      />
      <p>Luego, aceptar.</p>
    </div>
  );
};

export default page;
