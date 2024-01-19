import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import ValorIncorreceto from "@/components/librosElectronicos/libroElectronicoRegistroCompras/validar-libro-electronico-compras/valor-incorrecto/ValorIncorreceto";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validar-libro-electronico-compras/documento-identidad-incorrecto"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/consulta-libro-compras"
    >
      <ValorIncorreceto />
    </Layout>
  );
};

export default page;
