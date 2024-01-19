import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import ComoSubsanarInconsistencias from "@/components/librosElectronicos/libroElectronicoRegistroCompras/carga-libro-compras-ple/como-subsanar-inconsistencias/ComoSubsanarInconsistencias";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-diario-simplificado/carga-libro-diario-simplificado/como-cargar-libro-diario"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-diario-simplificado/validacion-libro-diario-simplificado"
    >
      <ComoSubsanarInconsistencias />
    </Layout>
  );
};

export default page;
