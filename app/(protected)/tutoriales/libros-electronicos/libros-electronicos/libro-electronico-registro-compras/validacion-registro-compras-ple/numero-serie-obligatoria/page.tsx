import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import NumeroSerieObligatoria from "@/components/librosElectronicos/libroElectronicoRegistroCompras/validacion-registro-compras-ple/numero-serie-obligatoria/NumeroSerieObligatoria";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/numero-blanco-cero"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/error-tipo01-factura"
    >
      <NumeroSerieObligatoria />
    </Layout>
  );
};

export default page;
