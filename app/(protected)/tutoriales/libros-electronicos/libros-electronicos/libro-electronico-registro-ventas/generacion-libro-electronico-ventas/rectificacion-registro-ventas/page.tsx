import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import RectificacionRegistroVentas from "@/components/librosElectronicos/libro-electronico-registro-ventas/generacion-libro-electronico-ventas/rectificacion-registro-ventas/RectificacionRegistroVentas";

const page = () => {
  return (
    <Layout
      on
      anterior={true}
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/generacion-libro-electronico-ventas/estado-indicador-libro-ventas"
      siguiente={true}
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple"
    >
      <RectificacionRegistroVentas />
    </Layout>
  );
};

export default page;
