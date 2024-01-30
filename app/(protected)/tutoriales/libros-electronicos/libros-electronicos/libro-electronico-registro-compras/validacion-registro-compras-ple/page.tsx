import Heading from "@/components/Heading";
import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import Image from "next/image";
import React from "react";
import ValidacionRegistroComprasPle from "@/components/librosElectronicos/libroElectronicoRegistroCompras/validacion-registro-compras-ple/ValidacionRegistroComprasPle";

const page = () => {
  return (
    <div>
      <>
        <ValidacionRegistroComprasPle />
      </>
    </div>
  );
};

export default page;
