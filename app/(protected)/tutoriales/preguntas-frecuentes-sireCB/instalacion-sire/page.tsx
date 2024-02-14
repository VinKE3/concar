import InstalacionSireCb from "@/app/(protected)/_components/concarSireCb/instalacion-sire/InstalacionSireCb";

const Instalacionpage = () => {
  const data = [
    {
      id: 1,
      title: "Cómo Generar el Libro Electrónico de Compras",
      href: "https://miconcar.com/uploads/documentos/895_concar_cb_sql_c1_1_Llave_unica_es_incorrecta_v1_.pdf",
    },
  ];
  return <InstalacionSireCb />;
};

export default Instalacionpage;
