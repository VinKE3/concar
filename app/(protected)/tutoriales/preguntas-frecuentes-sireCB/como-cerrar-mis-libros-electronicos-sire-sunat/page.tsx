import ComoCerrarMisLibrosElecSireSunat from "@/app/(protected)/_components/concarSireCb/como-cerrar-mis-libros-electronicos-sire-sunat/ComoCerrarMisLibrosElecSireSunat";
import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Cierre de libros compras y ventas PLE",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/10/Cod.1174_D01161_Cierre_libros_Ventas_Compras_NoDomiciliado.pdf",
    },
  ];
  return <ComoCerrarMisLibrosElecSireSunat />;
};

export default page;
