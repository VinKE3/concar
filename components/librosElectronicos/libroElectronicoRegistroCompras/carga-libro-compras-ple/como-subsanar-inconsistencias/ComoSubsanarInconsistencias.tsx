import Heading from "@/components/Heading";
import Image from "next/image";

const ComoSubsanarInconsistencias = () => {
  return (
    <>
      <Heading
        title="Cómo subsanar inconsistencias en el PLE-SUNAT"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <h1 className="text-gray-900 font-semibold pb-2">Caso:</h1>
      <p className="pb-2">
        Cómo subsanar las inconsistencias que el PLE detecta en el proceso de
        validación de los libros electrónicos. Ejemplo:
      </p>
      <Image
        src="/libroCompra/subsanar1.jpg"
        width={493}
        height={511}
        className="object-contain"
        alt="Subsanar inconsistencias en el PLE-SUNAT"
      />
      <h1 className="text-gray-900 font-semibold pb-2">Solución:</h1>
      <h1>1.Generar el libro electrónico de compras para el PLE en Excel:</h1>
      <Image
        src="/libroCompra/subsanar2.jpg"
        width={493}
        height={266}
        className="object-contain"
        alt="Subsanar inconsistencias en el PLE-SUNAT"
      />
      <h1>
        2. Para ubicar el(los) campo(s) inconsistentes para el PLE, realizar el
        recuento automático o manual (agregando una columna para contar las
        filas y una fila para contar las columnas) como se muestra en el
        ejemplo:
      </h1>
      <Image
        src="/libroCompra/subsanar3.jpg"
        width={493}
        height={288}
        className="object-contain"
        alt="Subsanar inconsistencias en el PLE-SUNAT"
      />
      <h1>
        3. Ir a la fila/columna que genera la inconsistencia y ubicar el
        comprobante correspondiente. En este ejemplo, se detecta que la
        inconsisten está en la columna Fecha de emisión del comprobante de pago
        o documento del comprobante 13-010025:
      </h1>
      <Image
        src="/libroCompra/subsanar4.jpg"
        width={493}
        height={288}
        className="object-contain"
        alt="Subsanar inconsistencias en el PLE-SUNAT"
      />
      <h1>
        4. En el CONCAR, reaperturar el comprobante que genera la inconsistencia
        y realizar las correcciones. Para este ejemplo, se corrije en el
        comprobante 13-010025 la fecha de emisión del documento.
      </h1>
      <Image
        src="/libroCompra/subsanar5.png"
        width={493}
        height={288}
        className="object-contain"
        alt="Subsanar inconsistencias en el PLE-SUNAT"
      />
      <h1>5. Volver a generar el archivo mensual de compras.</h1>
      <h1>6. Volver a generar el libro electrónico de compras.</h1>
      <h1>7. Validar el libro electrónico en el PLE.</h1>
    </>
  );
};

export default ComoSubsanarInconsistencias;
