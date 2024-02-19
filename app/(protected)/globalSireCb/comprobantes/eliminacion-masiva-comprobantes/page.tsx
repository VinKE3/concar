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
        Esta opción sirve para eliminar comprobantes en situación Pendiente (P)
        o Finalizados (F) y masivamente.
      </p>
      <p>
        Si el rango de comprobantes es mas de 1000, se puede realizar un
        servicio sujeto a costo, se realiza eliminación masiva por base de
        datos. Para solicitar este servicio es necesario que se comunique
        primero con el área de Consultoria, un consultor tomará su
        requerimiento, verificará la factibilidad de la realización del servicio
        y de proceder, coordinará el envío, por correo electrónico, de la
        cotización.
      </p>
      <p>
        Si usted está cargando comprobantes a través de una interfaz, le
        sugerimos crear una compañía de prueba para verificar si la carga de
        comprobantes es exitosa antes de cargarlos en la compañía definitiva.
      </p>
      <p>TEMA: ¿Cómo eliminar comprobantes en el CONCAR CB?</p>
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
              src="https://www.youtube.com/embed/Uv0Z4Yw_H_U?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
