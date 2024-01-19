import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import ErrorTipo01Factura from "@/components/librosElectronicos/libroElectronicoRegistroCompras/validacion-registro-compras-ple/error-tipo01-factura/ErrorTipo01Factura";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/numero-serie-obligatoria"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/documento-codigo6-ruc"
    >
      <ErrorTipo01Factura />
    </Layout>
  );
};
export default page;
