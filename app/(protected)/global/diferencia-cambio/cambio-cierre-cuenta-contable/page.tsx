import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Por_que_no_me_regulariza_el_tipo_de_cambio_cierre_en_mi_cuenta_contable_al_realizar_el_proceso_de_ajuste_FASB52	 ",
      href: "https://miconcar.com/uploads/documentos/1196_Cod.1196_D01183_por_que_no_me_regulariza_el_tipo_de_cambio_cierre_en_mi_cuenta_contable_al_realizar_el_proceso_de_ajuste_FASB52.pdf",
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
        continuar al siguiente mes,
      </p>
      <h1>
        TEMA: ¿Por qué no me regulariza el tipo de cambio cierre en mi cuenta
        contable al realizar el proceso de ajuste FASB 52?
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
              src="https://www.youtube.com/embed/c8_iN0pt5_4?autoplay=0&amp;mute=0&amp;controls=0&"
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
