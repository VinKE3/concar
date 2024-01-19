import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import DocumentoIdentidadIncorrecto from "@/components/librosElectronicos/libro-electronico-registro-ventas/validar-libro-electronico-ventas/documento-identidad-incorrecto/DocumentoIdentidadIncorrecto";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validar-libro-electronico-ventas"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validar-libro-electronico-ventas/valor-incorrecto"
    >
      <DocumentoIdentidadIncorrecto />
    </Layout>
  );
};

export default page;
