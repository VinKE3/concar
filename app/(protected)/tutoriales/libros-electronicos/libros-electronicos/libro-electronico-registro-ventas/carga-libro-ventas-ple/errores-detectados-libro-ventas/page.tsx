import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import ErroresDetectadosLibroVentas from "@/components/librosElectronicos/libro-electronico-registro-ventas/carga-libro-ventas-ple/errores-detectados-libro-ventas/ErroresDetectadosLibroVentas";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/numero-cero"
      siguienteHref="/tutoriales/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/numero-cero"
    >
      <ErroresDetectadosLibroVentas />
    </Layout>
  );
};

export default page;
