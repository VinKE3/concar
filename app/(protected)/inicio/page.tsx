import React from "react";
import Link from "next/link";
import { dataSoporte, dataEmpresa } from "./incio.data";
import Container from "@/components/Container";

const InicioPage = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5">
        <div className="py-14 px-11 rounded-lg w-full bg-gray-100">
          <h3 className="mb-4 text-black text-[22px] sm:text-[40px] font-extrabold leading-none">
            <span>Soporte y Asistencia</span>
          </h3>
          <ul className="mt-6 sm:mt-10">
            {dataSoporte.map(({ id, href, icon: Icon, title, description }) => {
              return (
                <li
                  key={id}
                  className="pt-2 pb-4 mb-2 last:mb-0 border-b border-black border-solid hover:bg-gray-200"
                >
                  <Link href={href}>
                    <div className="flex items-center justify-between text-black hover:text-black text-lg sm:text-xl font-medium">
                      <h1>{title}</h1>
                      <Icon size={48} />
                    </div>
                    <p>{description}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="py-14 px-11 rounded-lg w-full bg-gray-100 mb-10">
          <h3 className="mb-4 text-black text-[22px] sm:text-[40px] font-extrabold leading-none">
            <span>Mi empresa</span>
          </h3>
          <ul className="mt-6 sm:mt-10">
            {dataEmpresa.map(({ id, href, icon: Icon, title, description }) => {
              return (
                <li
                  key={id}
                  className="pt-2 pb-4 mb-2 last:mb-0 border-b border-black border-solid hover:bg-gray-200"
                >
                  <Link href={href}>
                    <div className="flex items-center justify-between text-black hover:text-black text-lg sm:text-xl font-medium">
                      <h1>{title}</h1>
                      <Icon size={48} />
                    </div>
                    <p>{description}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default InicioPage;
