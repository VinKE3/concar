import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import CampoObligatorioLlaveIncorrecta from "@/components/librosElectronicos/libro-electronico-diario-simplificado/validacion-libro-diario-simplificado/campo-obligatorio-llave-incorrecta/CampoObligatorioLlaveIncorrecta";

const page = () => {
  return (
    <Layout
      on
      anterior={true}
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-diario-simplificado/validacion-libro-diario-simplificado"
    >
      <CampoObligatorioLlaveIncorrecta />
    </Layout>
  );
};

export default page;
