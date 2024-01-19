import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import ValidacionLibroDiarioSimplificado from "@/components/librosElectronicos/libro-electronico-diario-simplificado/validacion-libro-diario-simplificado/ValidacionLibroDiarioSimplificado";

const page = () => {
  return (
    <Layout
      on
      anterior={true}
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-diario-simplificado/carga-libro-diario-simplificado/como-subsanar-inconsistencias"
      siguiente={true}
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-diario-simplificado/validacion-libro-diario-simplificado/campo-obligatorio-llave-incorrecta"
    >
      <ValidacionLibroDiarioSimplificado />
    </Layout>
  );
};

export default page;
