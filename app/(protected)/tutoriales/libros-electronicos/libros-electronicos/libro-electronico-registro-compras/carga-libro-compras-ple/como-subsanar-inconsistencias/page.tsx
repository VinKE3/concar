import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import ComoSubsanarInconsistencias from "@/components/librosElectronicos/libroElectronicoRegistroCompras/carga-libro-compras-ple/como-subsanar-inconsistencias/ComoSubsanarInconsistencias";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/carga-libro-compras-ple/como-cargar-libro-compras"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validar-libro-electronico-compras"
    >
      <ComoSubsanarInconsistencias />
    </Layout>
  );
};

export default page;
