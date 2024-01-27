import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import ErrorDocumento02ReciboHonorarios from "@/components/librosElectronicos/libroElectronicoRegistroCompras/validacion-registro-compras-ple/error-documento02-recibo-honorarios/ErrorDocumento02ReciboHonorarios";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/documento-codigo6-ruc"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/error-documento10-recibo-arrendamiento"
    >
      <ErrorDocumento02ReciboHonorarios />
    </Layout>
  );
};

export default page;
