import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import ComoCargarLibroCompras from "@/components/librosElectronicos/libroElectronicoRegistroCompras/carga-libro-compras-ple/como-cargar-libro-compras/ComoCargarLibroCompras";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/carga-libro-compras-ple"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/carga-libro-compras-ple/como-subsanar-inconsistencias"
    >
      <ComoCargarLibroCompras />
    </Layout>
  );
};

export default page;
