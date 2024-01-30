import Heading from "@/components/Heading";
import Image from "next/image";

const ValidacionRegistroComprasPle = () => {
  return (
    <div>
      <>
        <p className="mb-5">
          Al generar el libro electrónico de compras, ya sea en archivo de texto
          (para enviar a SUNAT) o en Excel, el sistema CONCAR® realiza una
          validación automática sobre los comprobantes de compras registrados.
          Si el sistema encuentra alguna inconsistencia que impida la carga del
          registro de compras electrónico al PLE-SUNAT emitirá un reporte de
          validación llamado Validación de Registro de Compras - PLE
          especificando las observaciones detectadas. Por ejemplo:
        </p>
        <Image
          src="/validacionLibroCompra.png"
          alt="Validación del Registro de Compras PLE"
          width={1000}
          height={1000}
          className="w-[843px] h-[180px]"
        />
      </>
    </div>
  );
};

export default ValidacionRegistroComprasPle;
