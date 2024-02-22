import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Como contabilizar compras no domiciliadas de servicios - invoice",
      href: "https://miconcar.com/uploads/documentos/719_Cod.0719_D00707_como_realizar_el__tratamiento_del_igv_no_domiciliado_por_comprobantes_de_compras_no_domiciliadas_servicios1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Al momento de registrar una Compra No Domiciliado - Servicios; se genera
        un IGV No Domiciliado pendiente; en el Manual adjunto indicamos los
        pasos a realizar para su correcto tratamiento
      </p>
      <Image
        alt="superar-mensaje-error-06"
        src="/compras/igvNoDomiciliadas.png.png"
        width={200}
        height={200}
      />
      <p>
        TEMA:¿Cómo realizar el Tratamiento del IGV NO Domiciliado por
        Comprobantes de Compras No Domiciliadas - Servicios?
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
              src="https://www.youtube.com/embed/UJgSzkMctYw?autoplay=0&amp;mute=0&amp;controls=0&"
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
