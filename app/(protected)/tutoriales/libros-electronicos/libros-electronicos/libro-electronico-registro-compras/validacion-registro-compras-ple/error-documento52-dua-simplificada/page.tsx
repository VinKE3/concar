import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import ErrorDocumento52DuaSimplificada from "@/components/librosElectronicos/libroElectronicoRegistroCompras/validacion-registro-compras-ple/error-documento52-dua-simplificada/ErrorDocumento52DuaSimplificada";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/fecha-vencimiento-documento14"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/error-tipo55-transporte-ferroviario"
    >
      <ErrorDocumento52DuaSimplificada />
    </Layout>
  );
};

export default page;
