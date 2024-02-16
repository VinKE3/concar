import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "como superar el mensaje - su servicio post venta ha expirado, renueve su servicio y actualice la llave electronica",
      href: "https://miconcar.com/uploads/documentos/136_Cod.0136_D00133_como_superar_el_mensaje_su_servicio_post_venta_ha_expirado_renueve_su_servicio_y_actualice_la_llave_electr%C3%B3nica1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Tener presente que su llave, requiere realizar un proceso de
        actualizacion al renovar el servicio.
      </p>
      <p>
        Los archivos que le permiten realizar este proceso, lo debe de solicitar
        o se lo enviara nuestra area de licencias al correo
        licencias@realsystems.com.pe.
      </p>
      <p>
        Debe indicar su razon social + ruc + personal de contacto + numero
        directo.
      </p>
      <p>
        Cuando le aparezca un mensaje similar, por favor realiza los pasos
        detallados en el manual y video adjunto:
      </p>
      <Image
        src="/postVentaExp.png"
        alt="llave no reconocida"
        width={200}
        height={200}
      />
      <h1>¿Cómo se Actualiza la Llave Electrónica?</h1>
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
              src="https://www.youtube.com/embed/YL0pPhSBblc?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <h1>
        ¿Cómo superar el mensaje - Su servicio post venta ha expirado - Renueve
        su servicio y Actualice la Llave Electrónica?
      </h1>
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
              src="https://www.youtube.com/embed/9CMCr7ZF3FI?autoplay=0&amp;mute=0&amp;controls=0&"
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
