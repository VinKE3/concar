"use client";
import Heading from "@/components/Heading";
import { data } from "@/data/libroElectronicoRegistroCompras.data";
import List from "@/components/List";

const LibroElectronicoRegistroCompra = () => {
  return (
    <>
      <Heading
        title="Libro Electrónico Registro de Compras"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
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

export default LibroElectronicoRegistroCompra;
