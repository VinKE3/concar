import Layout from "../../layouts/layoutLibrosElectronicos";
import LibroElectronico from "@/components/librosElectronicos/LibroElectronico";

const page = () => {
  return (
    <Layout
      on
      anterior={false}
      siguiente={true}
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras"
    >
      <LibroElectronico />
    </Layout>
  );
};

export default page;
