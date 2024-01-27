import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import ConsultaLibroVentas from "@/components/librosElectronicos/libro-electronico-registro-ventas/consulta-libros-ventas/ConsultaLibroVentas";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validar-libro-electronico-ventas/valor-incorrecto"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/consulta-libros-ventas/como-generar-mes-movimiento"
    >
      <ConsultaLibroVentas />
    </Layout>
  );
};

export default page;
