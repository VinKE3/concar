import GeneracionLibroDiarioSimplificado from "@/components/librosElectronicos/libro-electronico-diario-simplificado/generacion-libro-diario-simplificado/GeneracionLibroDiarioSimplificado";
import Layout from "../../../../layouts/layoutLibrosElectronicos";
import ComoGenerarLibroDiarioSimplificado from "@/components/librosElectronicos/libro-electronico-diario-simplificado/generacion-libro-diario-simplificado/como-generar-libro-diario-simplificado/ComoGenerarLibroDiarioSimplificado";

const page = () => {
  return (
    <Layout
      on
      anterior={true}
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-diario-simplificado"
      siguiente={true}
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-diario-simplificado/generacion-libro-diario-simplificado/como-generar-libro-diario-simplificado"
    >
      <GeneracionLibroDiarioSimplificado />
    </Layout>
  );
};

export default page;
