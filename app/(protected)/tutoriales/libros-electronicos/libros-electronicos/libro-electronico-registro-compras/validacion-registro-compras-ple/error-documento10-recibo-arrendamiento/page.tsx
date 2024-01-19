import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import ErrorDocumento10ReciboArrendamiento from "@/components/librosElectronicos/libroElectronicoRegistroCompras/validacion-registro-compras-ple/error-documento10-recibo-arrendamiento/ErrorDocumento10ReciboArrendamiento";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/error-documento02-recibo-honorarios"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/error-documento03-boleta-venta"
    >
      <ErrorDocumento10ReciboArrendamiento />
    </Layout>
  );
};

export default page;
