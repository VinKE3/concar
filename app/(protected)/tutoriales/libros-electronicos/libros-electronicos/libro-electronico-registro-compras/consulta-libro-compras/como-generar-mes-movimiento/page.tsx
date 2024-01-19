import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import ComoGenerarMesMovimiento from "@/components/librosElectronicos/libroElectronicoRegistroCompras/consulta-libro-compras/como-generar-mes-movimiento/ComoGenerarMesMovimiento";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/consulta-libro-compras"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas"
    >
      <ComoGenerarMesMovimiento />
    </Layout>
  );
};

export default page;
