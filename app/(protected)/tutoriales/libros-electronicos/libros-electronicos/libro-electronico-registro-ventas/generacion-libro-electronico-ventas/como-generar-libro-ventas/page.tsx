import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import ComoGenerarLibroVentas from "@/components/librosElectronicos/libro-electronico-registro-ventas/generacion-libro-electronico-ventas/como-generar-libro-ventas/ComoGenerarLibroVentas";

const page = () => {
  return (
    <Layout
      on
      anterior={true}
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/generacion-libro-electronico-ventas"
      siguiente={true}
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/generacion-libro-electronico-ventas/estado-indicador-libro-ventas"
    >
      <ComoGenerarLibroVentas />
    </Layout>
  );
};

export default page;
