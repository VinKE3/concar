"use client";
import Container from "@/components/Container";
import Header from "@/components/Header";
import TriButtons from "@/components/TriButtons";
import Heading from "@/components/Heading";
import { usePathname } from "next/navigation";
import { dataSubLibros } from "@/data/librosElectronicos.data";
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const flattenedData = dataSubLibros.reduce((acc: any, item) => {
    const items2 = item.items2.reduce((acc2: any, item2) => {
      const items3 = item2.items3.reduce((acc3: any, item3) => {
        return [...acc3, item3, ...item3.items4];
      }, []);
      return [...acc2, item2, ...items3];
    }, []);
    return [...acc, item, ...items2];
  }, []);

  const sortedData = flattenedData.sort((a: any, b: any) => a.id - b.id);

  // Encuentra el índice del objeto actual en dataManualUsuario
  const currentIndex = sortedData.findIndex(
    (item: any) => item.href === pathname
  );
  // Define anteriorHref y siguienteHref basandose en currentIndex
  let anteriorHref =
    currentIndex > 0 ? sortedData[currentIndex - 1].href : undefined;
  let siguienteHref =
    currentIndex < sortedData.length - 1
      ? sortedData[currentIndex + 1].href
      : undefined;
  // Define anterior y siguiente basandose en si anteriorHref y siguienteHref están definidos
  let anterior = anteriorHref !== undefined;
  let siguiente = siguienteHref !== undefined;
  // define el titulo de la página
  let titulo = sortedData[currentIndex].title;
  return (
    <>
      <Container>
        <Header
          title="Libros electrónicos"
          href="/tutoriales/libros-electronicos"
          subtitle="Categoría: CONCAR® SIRE SQL"
          text="ILibros electrónicos Compras, Ventas, Diario y Mayor."
        />
        <TriButtons
          indice="/tutoriales/libros-electronicos"
          anterior={anterior}
          anteriorHref={anteriorHref}
          siguiente={siguiente}
          siguienteHref={siguienteHref}
        />
        <Heading
          title={titulo}
          subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        />
        <div className="py-8">{children}</div>
      </Container>
    </>
  );
}
