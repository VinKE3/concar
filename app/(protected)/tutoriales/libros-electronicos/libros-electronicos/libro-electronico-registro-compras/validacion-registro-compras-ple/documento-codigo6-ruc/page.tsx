import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import DocumentoCodigo06Ruc from "@/components/librosElectronicos/libroElectronicoRegistroCompras/validacion-registro-compras-ple/documento-codigo6-ruc/DocumentoCodigo06Ruc";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/error-tipo01-factura"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/error-documento02-recibo-honorarios"
    >
      <DocumentoCodigo06Ruc />
    </Layout>
  );
};

export default page;
