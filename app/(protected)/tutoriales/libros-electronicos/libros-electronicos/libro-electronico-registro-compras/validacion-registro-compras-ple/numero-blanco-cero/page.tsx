import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import NumeroBlancoCero from "@/components/librosElectronicos/libroElectronicoRegistroCompras/validacion-registro-compras-ple/numero-blanco-cero/NumeroBlancoCero";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/numero-serie-obligatoria"
    >
      <NumeroBlancoCero />
    </Layout>
  );
};

export default page;
