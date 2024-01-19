import Layout from "../../../layouts/layoutLibrosElectronicos";
import LibroElectronicoRegistroVentas from "@/components/librosElectronicos/libro-electronico-registro-ventas/LibroElectronicoRegistroVentas";

const page = () => {
  return (
    <Layout
      on
      anterior={true}
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/consulta-libro-compras/como-generar-mes-movimiento"
      siguiente={true}
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/generacion-libro-electronico-ventas"
    >
      <LibroElectronicoRegistroVentas />
    </Layout>
  );
};

export default page;
