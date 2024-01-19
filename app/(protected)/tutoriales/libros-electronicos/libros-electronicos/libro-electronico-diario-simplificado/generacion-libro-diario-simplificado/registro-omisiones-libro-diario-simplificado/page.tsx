import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import RegistroOmisionesLibroDiarioSimplificado from "@/components/librosElectronicos/libro-electronico-diario-simplificado/generacion-libro-diario-simplificado/registro-omisiones-libro-diario-simplificado/RegistroOmisionesLibroDiarioSimplificado";

const page = () => {
  return (
    <Layout
      on
      anterior={true}
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-diario-simplificado/generacion-libro-diario-simplificado/como-generar-libro-diario-simplificado"
      siguiente={true}
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-diario-simplificado/carga-libro-diario-simplificado"
    >
      <RegistroOmisionesLibroDiarioSimplificado />
    </Layout>
  );
};

export default page;
