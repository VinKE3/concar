import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import DocumentoIdentidadIncorrecto from "@/components/librosElectronicos/libroElectronicoRegistroCompras/validar-libro-electronico-compras/documento-identidad-incorrecto/DocumentoIdentidadIncorrecto";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validar-libro-electronico-compras"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validar-libro-electronico-compras/valor-incorrecto"
    >
      <DocumentoIdentidadIncorrecto />
    </Layout>
  );
};

export default page;
