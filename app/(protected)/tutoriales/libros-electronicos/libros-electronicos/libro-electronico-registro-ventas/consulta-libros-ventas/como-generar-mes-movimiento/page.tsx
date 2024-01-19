import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import ComoGenerarMesMovimiento from "@/components/librosElectronicos/libro-electronico-registro-ventas/consulta-libros-ventas/como-generar-mes-movimiento/ComoGenerarMesMovimiento";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/consulta-libros-ventas"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-diario-simplificado"
    >
      <ComoGenerarMesMovimiento />
    </Layout>
  );
};

export default page;
