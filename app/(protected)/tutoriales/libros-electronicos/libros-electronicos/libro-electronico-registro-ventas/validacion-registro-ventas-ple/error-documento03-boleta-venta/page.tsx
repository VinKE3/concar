import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import ErrorDocumento03BoletaVenta from "@/components/librosElectronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-documento03-boleta-venta/ErrorDocumento03BoletaVenta";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-tipo01-factura"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-tipo04-liquidacion-compra"
    >
      <ErrorDocumento03BoletaVenta />
    </Layout>
  );
};

export default page;
