import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import ConsultaLibroCompras from "@/components/librosElectronicos/libroElectronicoRegistroCompras/consulta-libro-compras/ConsultaLibroCompras";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validar-libro-electronico-compras/valor-incorrecto"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/consulta-libro-compras/como-generar-mes-movimiento"
    >
      <ConsultaLibroCompras />
    </Layout>
  );
};

export default page;
