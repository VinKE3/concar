"use client";
import Heading from "@/components/Heading";
import { data } from "@/data/libroElectronicoRegistroVentas.data";
import List from "@/components/List";

const LibroElectronicoRegistroVentas = () => {
  return (
    <>
      <h1>Este tutorial contiene:</h1>
      {data.map(({ id, title, href, links }) => {
        return (
          <div key={id}>
            <List title={title} href={href} items={links} />
          </div>
        );
      })}
    </>
  );
};

export default LibroElectronicoRegistroVentas;
