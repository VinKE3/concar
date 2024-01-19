import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import CargaLibroComprasPle from "@/components/librosElectronicos/libroElectronicoRegistroCompras/carga-libro-compras-ple/CargaLibroComprasPle";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/error-tipo55-transporte-ferroviario"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/carga-libro-compras-ple/como-cargar-libro-compras"
    >
      <CargaLibroComprasPle />
    </Layout>
  );
};

export default page;
