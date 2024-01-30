import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="space-y-3">
      <h1 className="font-bold">
        5.2. CONTABILIZACIÓN DOCUMENTOS C/IGV SIN DERECHO A C. FISCAL
      </h1>
      <p>
        En esta operación, se contabiliza los documentos que no dan derecho a
        crédito fiscal, que han sido registrados y que, posteriormente, han sido
        marcados con VºBº. De otra manera, el sistema mostrará una pantalla
        indicando que el comprobante no tiene documento de referencia o
        conformidad.
      </p>
      <p>
        IMPORTANTE: Para poder utilizar esta opción debe configurar en la ceja
        {"Sub Diario Compra"} del Mantenimiento Parámetros Registro Compras del
        CONCAR SQL, el subdiario 14 asignándole la Columna de Compra 4.
      </p>
      <p>
        Al ingresar a esta opción, el sistema mostrará la siguiente pantalla:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/sispag_sql_contabilizacion_documentos_c_igv_sin_derecho_a_c._fiscal_1__.jpg"
        width={700}
        height={300}
        alt="Imagen 1"
      />

      <h1 className="flex ">
        <p>
          Ubicarse en el comprobante que va a ser contabilizado y presionar el
          botón
          <span>
            <Image
              src="https://miconcar.com/uploads/documentos/sispag_sql_contabilizacion_documentos_c_igv_sin_derecho_a_c._fiscal_2__.jpg"
              width={30}
              height={30}
              alt="Imagen 1"
            />
          </span>
        </p>
      </h1>
      <Image
        src="https://miconcar.com/uploads/documentos/sispag_sql_contabilizacion_documentos_c_igv_sin_derecho_a_c._fiscal_3__.jpg"
        width={700}
        height={300}
        alt="Imagen 1"
      />
      <p>Ingresar:</p>
      <p>
        FECHA COMP.: El sistema toma la fecha del comprobante, el cual se
        ingresó al momento de registrar el documento. Puede ser modificado por
        el usuario.
      </p>
      <p>T. CAMBIO: Desplegar el menú y seleccionar el tipo de cambio.</p>
      <p>
        SUBDIARIO: Desplegar el menú y seleccionar el subdiario en donde se
        registrará el comprobante. Previamente configurado en Mantenimiento
        Subdiario Programa.
      </p>
      <h1 className="flex ">
        <p>
          DEBE: Se llenará de forma automática, cuando se presione el botón
          <span>
            <Image
              src="https://miconcar.com/uploads/documentos/sispag_sql_contabilizacion_documentos_c_igv_sin_derecho_a_c._fiscal_4__3.jpg"
              width={60}
              height={60}
              alt="Imagen 1"
            />
          </span>
        </p>
      </h1>
      <p>
        GLOSA CABE.: Glosa para la cabecera. Puede ser modificado por el
        usuario.
      </p>
      <h1 className="flex ">
        <p>
          HABER: Se llenará de forma automática, cuando se presione el botón
          <span>
            <Image
              src="https://miconcar.com/uploads/documentos/sispag_sql_contabilizacion_documentos_c_igv_sin_derecho_a_c._fiscal_4__4.jpg"
              width={60}
              height={60}
              alt="Imagen 1"
            />
          </span>
        </p>
      </h1>
      <p>
        GLOSA DETA.: Glosa para el detalle. Puede ser modificado por el usuario.
      </p>
      <p>DIFERENCIA: Se mostrará la diferencia entre el Debe y el Haber.</p>
      <p>
        TIPO TASA: Presionar Shift + F1 y seleccionar el tipo de tasa de
        detracción. Previamente configurado en la Tabla General 28.
      </p>
      <p>
        TASA: El sistema asigna por defecto la tasa, luego de haber seleccionado
        el tipo de tasa.
      </p>
      <p>
        IMP. DETRACCIÓN MN: Importe de la detracción en moneda nacional. En caso
        utilizar el SISPAG.net para registrar el pago de la detracción, el
        sistema calculará automáticamente este importe aplicando al total del
        documento la tasa del dato anterior.
      </p>
      <p>
        No. DETRACCIÓN: Número de la constancia de detracción. De utilizar el
        SISPAG.net para registrar el pago de la detracción, el sistema tomará
        automáticamente como número de detracción, el número de comprobante
        agregándole un -D. Una vez registrado el pago individual o masivo de la
        detracción en el SISPAG.net, se cambiará este número por el de la
        constancia respectiva.
      </p>
      <p>
        FECHA DETRAC.: Fecha de la constancia de detracción. En caso utilizar el
        SISPAG.net para registrar el pago de la detracción el sistema tomará
        automáticamente como Fecha de detracción la fecha de registro. Una vez
        registrado el pago individual o masivo de la detracción en el SISPAG.net
        se cambiará esta fecha por la de la constancia respectiva.
      </p>
      <p>MONTO BASE MN: Monto base en moneda nacional</p>
      <h1 className="flex ">
        <p>
          Se cuenta con el botón
          <span>
            <Image
              src="https://miconcar.com/uploads/documentos/sispag_sql_contabilizacion_documentos_c_igv_sin_derecho_a_c._fiscal_4__4.jpg"
              width={60}
              height={60}
              alt="Imagen 1"
            />
          </span>
          <span>
            el cual se presionará cuando los datos anteriores hayan sido
            llenados.
          </span>
        </p>
      </h1>
      <p>
        Nota: Deberá registrarse la cuenta contable del Debe para finalizar el
        asiento. Los datos a ingresar son:
      </p>
      <p>
        CUENTA: Presionar Shift + F1 y seleccionar la cuenta contable de gastos.
        Previamente creada en el plan de cuentas del CONCAR SQL.
      </p>
      <p>
        C.COSTO: Desplegar el menú y seleccionar el centro de costos de
        referencia para el documento a ingresar. Previamente configurado en la
        Tabla General 05 del CONCAR SQL.
      </p>
      <p>
        DEBE-HABER: Digitar {"D"}o {"+"} si se va a registrar en la columna del
        {"Debe"} o {"H"} o {"-"}, al Haber.
      </p>
      <p>IMPORTE: Monto del gasto según comprobante de pago.</p>
      <p>
        TIPO DCMTO.: Desplegar el menú y seleccionar el tipo de documento.
        Previamente creado Tabla General 13 del SISPAG SQL.
      </p>
      <p>NÚM. DCMTO.: Número del comprobante a registrar</p>
      <p>FECHA DCMTO.: Fecha del comprobante a registrar</p>
      <p>GLOSA: Glosa con referencia del movimiento</p>
      <p>
        Nota: Como se aprecia, el sistema no crea cuenta para el IGV debiéndose
        contabilizar el total del documento en la cuenta de costo o gasto
        correspondiente.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/sispag_sql_contabilizacion_documentos_c_igv_sin_derecho_a_c._fiscal_5__1.jpg"
        width={700}
        height={300}
        alt="Imagen 1"
      />
      <h1 className="flex ">
        <p>
          Presionar el botón
          <span>
            <Image
              src="https://miconcar.com/uploads/documentos/sispag_sql_contabilizacion_documentos_c_igv_sin_derecho_a_c._fiscal_6__.jpg"
              width={60}
              height={60}
              alt="Imagen 1"
            />
          </span>
        </p>
      </h1>
      <Image
        src="https://miconcar.com/uploads/documentos/sispag_sql_contabilizacion_documentos_c_igv_sin_derecho_a_c._fiscal_8__1.jpg"
        width={400}
        height={400}
        alt="Imagen 1"
      />
      <p>
        Luego de finalizada la contabilización, el sistema creará el comprobante
        contable correspondiente y alimentará la cartera estando listo el
        documento para ser cancelado.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/sispag_sql_Contabilizacion_documentos_con_retencion_6_.jpg"
        width={700}
        height={400}
        alt="Imagen 1"
      />
      <p>
        Luego de finalizada la contabilización, el sistema creará el comprobante
        contable correspondiente y alimentará la cartera, estando listo el
        documento para ser cancelado.
      </p>
    </div>
  );
};

export default page;
