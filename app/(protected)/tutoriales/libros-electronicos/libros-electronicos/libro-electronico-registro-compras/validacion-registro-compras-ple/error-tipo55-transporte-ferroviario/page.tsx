import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import ErrorTipo55TransporteFerroviario from "@/components/librosElectronicos/libroElectronicoRegistroCompras/validacion-registro-compras-ple/error-tipo55-transporte-ferroviario/ErrorTipo55TransporteFerroviario";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/error-documento52-dua-simplificada"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/carga-libro-compras-ple"
    >
      <ErrorTipo55TransporteFerroviario />
    </Layout>
  );
};

export default page;
