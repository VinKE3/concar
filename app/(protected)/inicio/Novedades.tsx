import React from "react";
import Link from "next/link";
import { dataNovedades } from "./incio.data";

const Novedades = () => {
  return (
    <div className="py-14 px-11 rounded-lg w-full bg-slate-100 border border-dashed border-slate-500 mb-10">
      <h3 className="mb-4 text-gray-500 text-[22px] sm:text-[40px] font-extrabold leading-none">
        <span>Novedades</span>
      </h3>
      <ul className="mt-6 sm:mt-10">
        {dataNovedades.map(({ id, href, icon: Icon, title, description }) => {
          return (
            <li
              key={id}
              className="p-4 mb-2 last:mb-0 border-b border-black border-solid hover:bg-slate-200"
            >
              <Link href={href}>
                <div className="flex items-center justify-between text-black hover:text-black text-lg sm:text-xl font-medium">
                  <h1 className="text-gray-500 font-medium">{title}</h1>
                  <div className="bg-orange-500 rounded-full p-2">
                    <Icon className="text-white" size={48} />
                  </div>
                </div>
                <p className="text-gray-400 font-light">{description}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Novedades;
