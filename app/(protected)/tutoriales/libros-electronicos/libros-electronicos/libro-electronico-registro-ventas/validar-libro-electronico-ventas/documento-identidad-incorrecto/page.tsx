import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import DocumentoIdentidadIncorrecto from "@/components/librosElectronicos/libro-electronico-registro-ventas/validar-libro-electronico-ventas/documento-identidad-incorrecto/DocumentoIdentidadIncorrecto";

const page = () => {
  return (
    <>
      <DocumentoIdentidadIncorrecto />
    </>
  );
};

export default page;
