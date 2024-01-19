import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import ErrorTipo08NotaDebito from "@/components/librosElectronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-tipo08-nota-debito/ErrorTipo08NotaDebito";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-documento06-carta-porte"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-tipo55-transporte-ferroviario"
    >
      <ErrorTipo08NotaDebito />
    </Layout>
  );
};

export default page;
