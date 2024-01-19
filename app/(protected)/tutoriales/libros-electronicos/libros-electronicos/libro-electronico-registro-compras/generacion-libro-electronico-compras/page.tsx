import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import GeneracionLibroCompras from "@/components/librosElectronicos/libroElectronicoRegistroCompras/generacion-libro-electronico-compras/GeneracionLibroCompras";

const page = () => {
  return (
    <Layout
      on
      anterior={true}
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras"
      siguiente={true}
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/generacion-libro-electronico-compras/como-generar-libro-compras"
    >
      <GeneracionLibroCompras />
    </Layout>
  );
};

export default page;
