import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import ErrorTipo05BoletoAereo from "@/components/librosElectronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-tipo05-boleto-aereo/ErrorTipo05BoletoAereo";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-tipo04-liquidacion-compra"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-documento06-carta-porte"
    >
      <ErrorTipo05BoletoAereo />
    </Layout>
  );
};

export default page;
