import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Como separar los gastos no gravados (inafectos o exonerados) en el registro de compra",
      href: "https://miconcar.com/uploads/documentos/143_Cod.0143_D00140_como_separar_gastos_no_gravados_inafectos_o_exonerados_en_el_registro_de_compras1.pdf",
    },
    {
      id: 2,
      title:
        "como_registrar_factura_compra_gravada_y_no_gravada(cuenta_infecta)_igv10",
      href: "https://miconcar.com/uploads/documentos/143_Cod.0143_D00140_como_registrar_factura_compra_gravada_y_no_gravada(cuenta_infecta)_igv101.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        A continuacion podra visualizacion el manual respectivo, de como
        configurar los gastos no gravados, para que sean distinguidos y
        presentados debidamente el el Registro de Compra.
      </p>
      <p>
        Asimismo tanto para el IGV 18% e IGV 10%, permite el proceso compartido.
      </p>
      <p>
        TEMA: Como separar Gastos No Gravados (inafectos o exonerados) en el
        Registro de Compras
      </p>
      <div className="px-6 md:w-[45rem] h-96 lg:h-100%  mr-auto mb-10">
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Yr3WMEmr1ZU?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <Table items={data} />
    </div>
  );
};

export default page;
