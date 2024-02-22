import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Por_que_mi_asiento_de_apertura_se_genera_descuadrado",
      href: "https://miconcar.com/uploads/documentos/1198_Cod.1198_D01185_por_que_mi_asiento_de_apertura_se_genera_descuadrado2.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Adjuntamos el manual con los tips, recomendaciones a detalle para que lo
        revisen y comparen versus sus procesos:
      </p>
      <p className="font-bold">Es muy importante:</p>
      <p>
        - La configuracion correcta de la cuenta contable y el nivel de saldo
        asignado.
      </p>
      <p>
        - Si presenta una cuentas configuradas con distintos niveles de saldo,
        ello genera inconsistencia, descuadre en el proceso.
      </p>
      <p>
        - Realice su proceso de diferencia de cambio y ajuste fasb 52 mes a mes
        y verifique que figure sin pendientes por regularizar. antes de
        continuar al siguiente mes .
      </p>
      <p>TEMA: ¿Por qué mi Asiento de Apertura se genera Descuadrado?</p>
      <div className="px-6 md:w-[45rem] h-96 lg:h-100%  mr-auto mb-10">
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/LAIRqIae-ag?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <Table items={data} />
    </div>
  );
};

export default page;
