import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import ValidacionRegistroVentasPle from "@/components/librosElectronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/ValidacionRegistroVentasPle";

const page = () => {
  return (
    <div>
      <Layout
        on
        siguiente
        anterior
        siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/numero-numerico-mayor-cero"
        anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/generacion-libro-electronico-ventas/rectificacion-registro-ventas"
      >
        <ValidacionRegistroVentasPle />
      </Layout>
    </div>
  );
};

export default page;
