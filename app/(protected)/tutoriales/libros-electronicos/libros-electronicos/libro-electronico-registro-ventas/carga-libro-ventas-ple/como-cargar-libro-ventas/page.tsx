import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import ComoCargarLibroVentas from "@/components/librosElectronicos/libro-electronico-registro-ventas/carga-libro-ventas-ple/como-cargar-libro-ventas/ComoCargarLibroVentas";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/carga-libro-ventas-ple"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/carga-libro-ventas-ple/subsanar-inconsistencias"
    >
      <ComoCargarLibroVentas />
    </Layout>
  );
};

export default page;
