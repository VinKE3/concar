import React from "react";
import Container from "@/components/Container";
import Novedades from "./Novedades";
import Empresa from "./Empresa";
import Soporte from "./Soporte";
import { Slider } from "./slider/Slider";

const InicioPage = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5">
        <div>
          <Slider />
          <Novedades />
        </div>
        <div>
          <Soporte />

          <Empresa />
        </div>
      </div>
    </Container>
  );
};

export default InicioPage;
