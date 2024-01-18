import Container from "@/components/Container";
import Header from "@/components/Header";
import TriButtons from "@/components/TriButtons";

interface LayoutProps {
  children: React.ReactNode;
  indice?: string;
  anterior?: boolean;
  anteriorHref?: string;
  siguiente?: boolean;
  siguienteHref?: string;
}

export default function Layout({
  children,
  indice,
  anterior,
  anteriorHref,
  siguiente,
  siguienteHref,
}: LayoutProps) {
  return (
    <Container>
      <Header
        title="Cierre y apertura contable"
        href="/tutoriales/cierre-apertura-contable"
        subtitle="Categoría: CONCAR® SIRE SQL"
        text="Proceso de Cierre y Apertura contable."
      />
      <TriButtons
        indice={indice}
        anterior={anterior}
        anteriorHref={anteriorHref}
        siguiente={siguiente}
        siguienteHref={siguienteHref}
      />
      {children}
    </Container>
  );
}
