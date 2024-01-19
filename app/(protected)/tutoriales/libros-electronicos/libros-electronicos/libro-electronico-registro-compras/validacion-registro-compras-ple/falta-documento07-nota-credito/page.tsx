import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import FaltaDocumento57NotaCredito from "@/components/librosElectronicos/libroElectronicoRegistroCompras/validacion-registro-compras-ple/falta-documento07-nota-credito/FaltaDocumento57NotaCredito";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/fecha-documento-mayor-documento07"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/fecha-vencimiento-documento14"
    >
      <FaltaDocumento57NotaCredito />
    </Layout>
  );
};

export default page;
