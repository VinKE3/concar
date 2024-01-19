import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import CargaLibroVentasPle from "@/components/librosElectronicos/libro-electronico-registro-ventas/carga-libro-ventas-ple/CargaLibroVentasPle";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-tipo55-transporte-ferroviario"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/carga-libro-ventas-ple/como-cargar-libro-ventas"
    >
      <CargaLibroVentasPle />
    </Layout>
  );
};

export default page;
