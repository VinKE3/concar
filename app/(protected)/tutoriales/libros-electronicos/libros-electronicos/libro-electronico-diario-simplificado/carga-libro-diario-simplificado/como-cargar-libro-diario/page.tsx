import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import ComoCargarLibroDiario from "@/components/librosElectronicos/libro-electronico-diario-simplificado/carga-libro-diario-simplificado/como-cargar-libro-diario/ComoCargarLibroDiario";

const page = () => {
  return (
    <Layout
      on
      anterior={true}
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-diario-simplificado/carga-libro-diario-simplificado"
      siguiente={true}
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-diario-simplificado/carga-libro-diario-simplificado/como-subsanar-inconsistencias"
    >
      <ComoCargarLibroDiario />
    </Layout>
  );
};

export default page;
