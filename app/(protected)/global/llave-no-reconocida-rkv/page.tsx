import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "como proceder al mensaje llave no reconocida, llave no corresponde, llave no esta conectada, llave virtual rkv",
      href: "https://miconcar.com/uploads/documentos/1155_Cod.1155_D01142_como_proceder_al_mensaje_llave_no_reconocida_llave_no_corresponde_llave_no_esta_conectada_llave_virtualrkv.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>En primer lugar debera verificar si activo su llave virtual:</p>
      <p>1.- Ir a la unidad C a la carpeta Concar80.</p>
      <p>
        2.- Buscar el archivo que inicia con su RUC o DNI y termina con las
        letras .rkv.
      </p>
      <p>
        3.- Ese archivo debera enviarlo a nuestra area de licencias para su
        activacion al correo licencias@realsystems.com.pe colocando su razon
        social y ruc.
      </p>
      <p>
        Si ya realizo estos pasos y recibio por correo la confirmacion de{" "}
        {"llave activada"}.
      </p>
      <p>
        Pero al momento de ingresar se le genera mensajes similares{" "}
        {"Llave no Reconocida"} - {"Llave no Corresponde"}-{" "}
        {"Llave No esta Conectada"}, debera realizar lo indicado en el manual
        adjunto.
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
