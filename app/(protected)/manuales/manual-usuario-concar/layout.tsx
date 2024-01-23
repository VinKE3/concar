"use client";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import TriButtons from "@/components/TriButtons";
import { dataManualUsuario } from "@/data/manuales.data";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  // Encuentra el índice del objeto actual en dataManualUsuario
  const currentIndex = dataManualUsuario.findIndex(
    (item) => item.href === pathname
  );

  // Define anteriorHref y siguienteHref basándote en currentIndex
  let anteriorHref =
    currentIndex > 0 ? dataManualUsuario[currentIndex - 1].href : undefined;
  let siguienteHref =
    currentIndex < dataManualUsuario.length - 1
      ? dataManualUsuario[currentIndex + 1].href
      : undefined;
  // Define anterior y siguiente basándote en si anteriorHref y siguienteHref están definidos
  let anterior = anteriorHref !== undefined;
  let siguiente = siguienteHref !== undefined;
  // define el titulo de la página
  let titulo = dataManualUsuario[currentIndex].title;
  return (
    <Container>
      <Header
        title="Manual de Usuario CONCAR SQL"
        href="/tutoriales/main-manual-usuario-concar"
        subtitle="Categoría: CONCAR® SQL"
        text="Este es una guía que te ayudará a entender el funcionamiento del sistema de forma ordenada y concisa."
      />
      <TriButtons
        indice="/manuales/main-manual-usuario-concar"
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
  );
}
