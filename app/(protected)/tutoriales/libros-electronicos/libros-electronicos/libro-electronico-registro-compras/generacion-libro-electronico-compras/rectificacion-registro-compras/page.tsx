import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import RectificacionRegistroCompras from "@/components/librosElectronicos/libroElectronicoRegistroCompras/generacion-libro-electronico-compras/rectificacion-registro-compras/RectificacionRegistroCompras";

const page = () => {
  return (
    <Layout
      on
      anterior={true}
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/generacion-libro-electronico-compras/estado-indicador-libro-compras"
      siguiente={true}
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple"
    >
      <RectificacionRegistroCompras />
    </Layout>
  );
};

export default page;
