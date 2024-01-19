import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import ErrorDocumento06CartaPorte from "@/components/librosElectronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-documento06-carta-porte/ErrorDocumento06CartaPorte";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-tipo05-boleto-aereo"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-tipo08-nota-debito"
    >
      <ErrorDocumento06CartaPorte />
    </Layout>
  );
};

export default page;
