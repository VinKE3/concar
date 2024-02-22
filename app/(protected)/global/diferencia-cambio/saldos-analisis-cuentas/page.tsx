import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Por que sigue figurando saldos en el análisis de cuentas al realizar mi proceso de regularización por diferencia de cambio",
      href: "https://miconcar.com/uploads/documentos/1195_Cod.1195_D01182_por_que_sigue_figurando_saldos_en_el_an%C3%A1lisis_de_cuentas_al_realizar_mi_proceso_de_regularizaci%C3%B3n_por_diferencia_de_cambio-1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Es muy importante:</p>
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
        continuar al siguiente mes.
      </p>
      <h1>
        TEMA: ¿Por qué sigue figurando saldos en el análisis de cuentas, al
        realizar mi proceso de regularización por diferencia de cambio?
      </h1>
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
              src="https://www.youtube.com/embed/glcZwfQQuBc?autoplay=0&amp;mute=0&amp;controls=0&"
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
