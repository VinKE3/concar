import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import ValorIncorrecto from "@/components/librosElectronicos/libro-electronico-registro-ventas/validar-libro-electronico-ventas/valor-incorrecto/ValorIncorrecto";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validar-libro-electronico-ventas/documento-identidad-incorrecto"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/consulta-libros-ventas"
    >
      <ValorIncorrecto />
    </Layout>
  );
};

export default page;
