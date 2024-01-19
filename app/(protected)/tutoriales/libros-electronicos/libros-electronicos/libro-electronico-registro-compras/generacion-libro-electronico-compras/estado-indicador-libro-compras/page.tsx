import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import EstadoIndicadorLibroCompras from "@/components/librosElectronicos/libroElectronicoRegistroCompras/generacion-libro-electronico-compras/estado-indicador-libro-compras/EstadoIndicadorLibroCompras";

const EstadoIndicadorLibroComprasPage = () => {
  return (
    <Layout
      on
      anterior={true}
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/generacion-libro-electronico-compras/como-generar-libro-compras"
      siguiente={true}
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/generacion-libro-electronico-compras/rectificacion-registro-compras"
    >
      <EstadoIndicadorLibroCompras />
    </Layout>
  );
};

export default EstadoIndicadorLibroComprasPage;
