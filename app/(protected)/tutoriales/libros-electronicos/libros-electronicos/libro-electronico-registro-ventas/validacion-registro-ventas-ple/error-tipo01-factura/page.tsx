import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import ErrorTipo01Factura from "@/components/librosElectronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-tipo01-factura/ErrorTipo01Factura";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/numero-numerico-mayor-cero"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-documento03-boleta-venta"
    >
      <ErrorTipo01Factura />
    </Layout>
  );
};
export default page;
