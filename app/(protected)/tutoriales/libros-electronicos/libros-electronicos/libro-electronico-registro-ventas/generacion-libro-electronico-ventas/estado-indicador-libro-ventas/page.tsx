import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import EstadoIndicadorLibroVentas from "@/components/librosElectronicos/libro-electronico-registro-ventas/generacion-libro-electronico-ventas/estado-indicador-libro-ventas/EstadoIndicadorLibroVentas";

const page = () => {
  return (
    <Layout
      on
      anterior={true}
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/generacion-libro-electronico-ventas/como-generar-libro-ventas"
      siguiente={true}
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/generacion-libro-electronico-ventas/rectificacion-registro-ventas"
    >
      <EstadoIndicadorLibroVentas />
    </Layout>
  );
};

export default page;
