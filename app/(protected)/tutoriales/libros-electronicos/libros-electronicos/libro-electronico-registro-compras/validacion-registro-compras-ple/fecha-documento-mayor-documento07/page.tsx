import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import FechaDocumentoMayorDocumento07 from "@/components/librosElectronicos/libroElectronicoRegistroCompras/validacion-registro-compras-ple/fecha-documento-mayor-documento07/FechaDocumentoMayorDocumento07";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/error-documento06-carta-porte"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/falta-documento07-nota-credito"
    >
      <FechaDocumentoMayorDocumento07 />
    </Layout>
  );
};

export default page;
