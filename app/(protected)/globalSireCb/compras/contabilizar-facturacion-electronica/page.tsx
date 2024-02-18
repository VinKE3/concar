import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Como realizar la contabilización de la facturación electrónica en el e concar pro",
      href: "https://miconcar.com/uploads/documentos/1037_1037_Cod.1037_D01024_C%C3%B3mo_se_provisiona_una_compra_con_Facturaci%C3%B3n_Electr%C3%B3nica_en_el_e-CONCAR_PRO.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        El sistema e-CONCAR PRO permite validar y contabilizar su Facturacion
        Electronica que emiten sus proveedores a travez del Portal de la SUNAT,
        de la siguiente manera:
      </p>
      <Image
        alt="Contabilizar Factura Electronica en e-CONCAR PRO"
        src="/contabilizarFacutra.png"
        width={400}
        height={400}
      />
      <p>
        Para conocer el funcionamiento te invito que revises el documento
        adjunto líneas abajo
      </p>
      <p>
        TEMA: ¿Cómo realizar la contabilización de la Facturación Electrónica en
        el e-CONCAR PRO?
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
              src="https://www.youtube.com/embed/yOh6xmnfMhk?autoplay=0&amp;mute=0&amp;controls=0&"
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
