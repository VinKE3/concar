import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import ErrorDocumento03BoletaVenta from "@/components/librosElectronicos/libroElectronicoRegistroCompras/validacion-registro-compras-ple/error-documento03-boleta-venta/ErrorDocumento03BoletaVenta";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/error-documento10-recibo-arrendamiento"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/error-documento06-carta-porte"
    >
      <ErrorDocumento03BoletaVenta />
    </Layout>
  );
};

export default page;
