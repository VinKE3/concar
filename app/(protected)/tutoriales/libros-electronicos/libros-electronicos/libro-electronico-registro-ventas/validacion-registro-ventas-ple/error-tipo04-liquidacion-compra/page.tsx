import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import ErrorTipo04LiquidacionCompra from "@/components/librosElectronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-tipo04-liquidacion-compra/ErrorTipo04LiquidacionCompra";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-documento03-boleta-venta"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-tipo05-boleto-aereo"
    >
      <ErrorTipo04LiquidacionCompra />
    </Layout>
  );
};

export default page;
