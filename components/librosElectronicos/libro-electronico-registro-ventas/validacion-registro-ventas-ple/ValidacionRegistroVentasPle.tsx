import Heading from "@/components/Heading";
import Image from "next/image";

const ValidacionRegistroVentasPle = () => {
  return (
    <div>
      <>
        <p className="mb-5">
          Al generar el libro electrónico de ventas, ya sea en archivo de texto
          (para enviar a SUNAT) o en Excel, el sistema CONCAR® realiza una
          validación automática sobre los comprobantes de ventas registrados. Si
          el sistema encuentra alguna inconsistencia que impida la carga del
          registro de ventas electrónico al PLE-SUNAT emitirá un reporte de
          validación llamado Validación de Registro de Ventas - PLE
          especificando las observaciones detectadas. Por ejemplo:
        </p>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_cb_sql_c1_1_v2015_01_Observaciones_libro_electronico_ventas_img1_v1_.png"
          alt="Validación del Registro de Ventas PLE"
          width={1000}
          height={1000}
          className="w-[843px] h-[180px]"
        />
      </>
    </div>
  );
};

export default ValidacionRegistroVentasPle;
