import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import ErrorTipo55TransporteFerroviario from "@/components/librosElectronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-tipo55-transporte-ferroviario/ErrorTipo55TransporteFerroviario";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-tipo08-nota-debito"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/carga-libro-ventas-ple"
    >
      <ErrorTipo55TransporteFerroviario />
    </Layout>
  );
};

export default page;
