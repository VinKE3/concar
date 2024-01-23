import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const LicenciaRealKey = () => {
  const data = [
    {
      id: 1,
      title:
        "El archivo a descargar para guardarlo en la carpeta C:RSCONCAR o en la carpeta donde se instaló el software",
      href: "https://miconcar.com/uploads/documentos/188_CONCAR_SQL_Ventas_a_no_domiciliados_en_libro_electronico_de_ventas.pdf",
    },
  ];
  return (
    <>
      <div className="space-y-3">
        <h1>
          Cuando el cliente o usuario del CONCAR SQL desee ingresar y le salga
          algunos de estos mensajes:{" "}
        </h1>
        <p className="font-bold">
          “License file error. Could not locate license file, please reinstall
          the software.”
        </p>
        <Image
          src="/manejoLicenciaRealKey/1.jpeg"
          alt="1"
          width={500}
          height={500}
        />
        <p className="font-bold">
          License file error. Your license file must be damaged, please
          reinstall the software. (0)”,
        </p>
        <Image
          src="/manejoLicenciaRealKey/2.jpeg"
          alt="2"
          width={500}
          height={500}
        />
        <p>
          Se debe a le está faltando el archivo RSCONCAR.vpl en la carpeta de
          instalación del CONCAR SQL, que está en C:\RSCONCAR{" "}
        </p>
        <div className="flex items-center justify-start gap-2">
          <p>para descargar el archivo</p>
          <Image
            src="/manejoLicenciaRealKey/3.jpeg"
            alt="3"
            width={200}
            height={200}
          />
        </div>
        <p>
          Deberá hacerlo desde el enlace que se encuentra en la sección ARCHIVOS
          Y ENLACES, haciendo un clic derecho y seleccionando la opción: Guardar
          enlace como... de la siguiente forma:
        </p>
        <Image
          src="/manejoLicenciaRealKey/4.jpeg"
          alt="4"
          width={800}
          height={700}
        />
        <p>
          El archivo que descargue deberá guardarlo en C:\RSCONCAR o en la
          carpeta donde se instaló el software como sigue:
        </p>
        <Image
          src="/manejoLicenciaRealKey/5.jpeg"
          alt="5"
          width={500}
          height={500}
        />
        <Table items={data} />
      </div>
    </>
  );
};

export default LicenciaRealKey;
