import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import ComoGenerarLibroCompras from "@/components/librosElectronicos/libroElectronicoRegistroCompras/generacion-libro-electronico-compras/como-generar-libro-compras/ComoGenerarLibroCompras";

const ComoGenerarLibroComprasPage = () => {
  return (
    <Layout
      on
      anterior={true}
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/generacion-libro-electronico-compras"
      siguiente={true}
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/generacion-libro-electronico-compras/estado-indicador-libro-compras"
    >
      <ComoGenerarLibroCompras />
    </Layout>
  );
};

export default ComoGenerarLibroComprasPage;
