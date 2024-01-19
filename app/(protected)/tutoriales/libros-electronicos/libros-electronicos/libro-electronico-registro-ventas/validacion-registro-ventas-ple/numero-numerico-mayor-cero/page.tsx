import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import NumeroNumericoMayorCero from "@/components/librosElectronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/numero-numerico-mayor-cero/NumeroNumericoMayorCero";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-tipo01-factura"
    >
      <NumeroNumericoMayorCero />
    </Layout>
  );
};

export default page;
