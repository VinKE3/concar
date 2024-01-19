import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import ErrorDocumento06CartaPorte from "@/components/librosElectronicos/libroElectronicoRegistroCompras/validacion-registro-compras-ple/error-documento06-carta-porte/ErrorDocumento06CartaPorte";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/error-documento03-boleta-venta"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/fecha-documento-mayor-documento07"
    >
      <ErrorDocumento06CartaPorte />
    </Layout>
  );
};

export default page;
