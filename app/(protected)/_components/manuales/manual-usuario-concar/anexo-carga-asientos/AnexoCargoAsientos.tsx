import Image from "next/image";
import React from "react";

const AnexoCargoAsientos = () => {
  return (
    <div className="space-y-3">
      <p>
        Al momento de ingresar a esta opción el sistema verifica la existencia
        de las tablas de interface (Comprobantes y anexos). Estas tablas deben
        ser creadas en la base de datos del CONCAR® SQL
      </p>
      <h1 className="font-bold">
        ANEXO II: FORMATO DE ARCHIVOS PARA CARGA DE ASIENTOS AUTOMÁTICOS
      </h1>
      <p>
        Al momento de ingresar a esta opción el sistema verifica la existencia
        de las tablas de interface (Comprobantes y anexos). Estas tablas deben
        ser creadas en la base de datos del CONCAR® SQL
      </p>
      <p>
        Si no existiera, el sistema creará su estructura sin información, de
        esta forma el usuario podrá grabar los datos a través de su interface
        hacia estas tablas.
      </p>
      <p>Las tablas son las siguientes:</p>
      <p>CCXXXXAA - Comprobantes Cabeceras Ejemplo CC000106</p>
      <p>CDXXXXAA - Comprobantes Detalles Ejemplo CD000106</p>
      <p>CANXXXX - Anexos Ejemplo CAN0001</p>
      <p>
        En donde XXXX es el código de la compañía y AA el año del ejercicio
        contable.
      </p>
      <p>
        En la tabla de Cabecera de Comprobante (CCXXXXAA), debe existir un
        registro por cada comprobante y el archivo de detalles deben existir
        varios registros por comprobante. Los campos de relación son los campos
        CSUBDIA y CCOMPRO.
      </p>
      <h1 className="font-bold">Estructura de Tabla CANXXXX- Anexos</h1>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_anexo_II_III_IV_carga_asientos_1_4.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        * Campos que se deben considerar solamente para las empresas que son
        agentes de retención.
      </p>
      <h1 className="font-bold">
        Estructura de Tabla CCXXXXAA - Comprobantes Cabeceras
      </h1>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_anexo_II_III_IV_carga_asientos_2_2.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <h1 className="font-bold">
        Estructura de la Tabla CDXXXXAA – Comprobantes Detalle
      </h1>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_anexo_II_III_IV_carga_asientos_3_2.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_anexo_II_III_IV_carga_asientos_4_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        * Sólo si realiza transacciones con máquinas registradora adicionar los
        campos
      </p>
      <h1 className="font-bold">Tablas de Comprobantes</h1>
      <p>
        Las Tablas CCXXXAA (Cabecera de comprobante) y CDXXXXAA (Detalle de
        comprobante), en él se ingresan la información de los comprobantes. La
        información de los comprobantes deben ser numerados correlativamente por
        subdiario y mes contable.
      </p>
      <p>
        Se recomienda que cada sistema que genera comprobantes tenga asignado un
        número de subdiario exclusivo para tener un mejor control de la
        numeración. La numeración de los comprobantes es por cada Subdiario y
        mes contable con la siguiente estructura:
      </p>
      <table className="border-separate border-spacing-2">
        <thead>
          <tr>
            <th className="font-bold">SUBDIARIO </th>
            <th className="font-bold">COMPROBANTE</th>
            <th className="font-bold">------------</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>04</td>
            <td>04</td>
            <td>04</td>
          </tr>
          <tr>
            <td>010001</td>
            <td>010002</td>
            <td>020001</td>
          </tr>
          <tr>
            <td>ENERO</td>
            <td>ENERO</td>
            <td>FEBRERO</td>
          </tr>
        </tbody>
      </table>
      <p>
        Los dos primeros dígitos del comprobante indican el mes contable y deben
        coincidir con la fecha del comprobante
      </p>
      <h1 className="font-bold">Tabla de Anexos</h1>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_anexo_II_III_IV_carga_asientos_5_2.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={200}
        height={100}
      />
      <p>
        En la tabla CANXXXX (Tablas de Anexos) se ingresa la información de los
        clientes, proveedores, bancos, etc. los cuales han sido registrados en
        sus comprobantes.
      </p>
      <p>
        Es por ello que al cargar los comprobantes siempre se deben cargar
        primero los anexos y luego los comprobantes. Para habilitar la carga de
        anexos en la pantalla de carga de comprobantes hay un casillero en Carga
        Comprobantes de Tabla SQL, el cual debe estar activado.
      </p>
      <p>Ejemplo: Anexos</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_anexo_II_III_IV_carga_asientos_6_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start">
        <h1>La interface realizará lo siguiente en la opción</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_anexo_II_III_IV_carga_asientos_7_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={100}
          height={40}
        />
      </div>
      <ul className="px-5 list-disc">
        <li>
          Compara las estructuras de la interface con respecto a las tablas de
          destino.
        </li>
        <li>
          Proceso de validación de datos de la interface con respecto a los
          campos que utilizan las Tablas Generales del CONCAR® SQL
        </li>
        <li>
          Validación de los datos obligatorios que deben ingresar en estas
          tablas como son: Existencia del subdiario, cuenta, centro de costos,
          etc.
        </li>
        <li>
          Si se encontraran errores en las validaciones, el sistema mostrará un
          reporte indicando el error con respecto a la tabla.
        </li>
      </ul>
      <h1 className="font-bold">a. Error en las estructuras.</h1>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_anexo_II_III_IV_carga_asientos_8_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <h1 className="font-bold">b. Error en el tipo de dato.</h1>

      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_anexo_II_III_IV_carga_asientos_9_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />

      <h1 className="font-bold">
        c. Si la información se hubiera cargado correctamente, aparece la
        siguiente pantalla de resumen.
      </h1>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_anexo_II_III_IV_carga_asientos_10_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <h1 className="font-bold">
        EJEMPLO DE INFORMACIÓN QUE SE DEBE CARGAR EN LOS COMPROBANTES
      </h1>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_anexo_II_III_IV_carga_asientos_11_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_anexo_II_III_IV_carga_asientos_12_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <h1 className="font-bold">
        EJEMPLO DE INFORMACIÓN QUE SE DEBE CARGAR EN LOS COMPROBANTES CON
        DOCUMENTOS DE REFERENCIA
      </h1>
      <p>CABECERA DEL COMPROBANTE</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_anexo_II_III_IV_carga_asientos_13_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_anexo_II_III_IV_carga_asientos_14_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <h1 className="font-bold">NOTAS</h1>
      <ul className="px-5 list-decimal">
        <li>
          Existe un archivo CTXXXXNUMEAA por cada ejercicio contable y compañía.
        </li>
        <p>Ejemplo CT0001NUME96.DBF</p>
        <li>El archivo CTXXXXNUMEAA tiene la siguiente estructura:</li>
        <p> CTSUBDIA+CTANO+CTMES</p>
        <li>
          El archivo CTXXXXNUMEAA es usado por los programas de registro de
          comprobantes, por lo que si desea actualizar deben usarse las
          convenciones para manejo de red.
        </li>
        <li>
          Para actualizar un registro del CTXXXXNUMEAA, debe buscarse dicho
          registro por los campos indicados en el índice, si no existiera el
          registro debe crearse y luego incrementar el campo CTNUMER en 1,
          regrabándose inmediatamente.
        </li>
      </ul>
      <h1 className="font-bold">
        ANEXO IV: RECOMENDACIONES PARA LA CONTABILIDAD BIMONETARIA
      </h1>
      <ul className="px-5 list-item">
        <li className="font-bold">a) Registro de Comprobantes</li>
        <p>
          Los comprobantes deben registrarse en la moneda en que se realizó la
          operación, indicándose el tipo de cambio que se usará para que se
          convierta de dólares a soles o viceversa.
        </p>
        <li className="font-bold">b) Cuentas Contables en soles y dólares.</li>
        <p>
          En el Plan de Cuentas deben definirse cuentas separadas para las
          operaciones de soles y dólares; especialmente para las cuentas por
          cobrar y por pagar porque de esta manera se simplifica el ajuste
          mensual de diferencia de cambio.
        </p>
        <li className="font-bold">c) Registro de operaciones de bancos</li>
        <p>
          Los comprobantes de operaciones de bancos deben registrarse en la
          moneda en que se realizan, para evitar diferencias de conversión en la
          conciliación bancaria
        </p>
        <p>
          Por ejemplo: Si se paga una factura de proveedor en soles con un
          cheque en dólares, debe registrarse el comprobante en dólares
        </p>
        <li className="font-bold">
          d) Regularización de diferencias de cambio
        </li>
        <p>
          En la cobranza de facturas de clientes o pago a proveedores, deben
          registrarse los comprobantes en la moneda de la operación. El sistema
          tiene una opción automática que permite regularizar las diferencias de
          cambio del mes generando un asiento.
        </p>
        <p>Ejemplo 1:</p>
        <p>
          Factura emitida en dólares 1,000.00, tipo de cambio 2.20, equivale a
          S/. 2,200.00
        </p>
        <p>
          Abono de la Factura en dólares 1,000.00, tipo de cambio 2.10, equivale
          a S/. 2,100.00
        </p>
        <p>
          El sistema detecta el saldo en soles de S/. 100.00 y genera un asiento
          de pérdida por diferencia de cambio en soles sin conversión a dólares.
        </p>
        <p>Ejemplo 2:</p>
        <p>
          Factura emitida en soles 1,000.00, tipo de cambio 2.20, equivale a US.
          $ 454.55
        </p>
        <p>
          Abono de la Factura en soles 1,000.00, tipo de cambio 2.10, equivale a
          US $. 476.19
        </p>
        <p>
          El sistema detecta el saldo en dólares de US $ -21.64 y genera un
          asiento de ganancia por diferencia de cambio en dólares sin conversión
          a soles.
        </p>
        <li className="font-bold">
          e) Ajuste por diferencia de cambio FASB 52
        </li>
        <p>
          El sistema dispone de una opción para ajustar los saldos de las
          cuentas en dólares al tipo de cambio compra o venta del último día del
          mes
        </p>
        <p>
          Este ajuste se realiza en forma global por cuenta o detalladamente
          cuando corresponde a documentos de clientes o acreedores. Para
          facilitar este ajuste en conveniente que las cuentas en dólares estén
          claramente definidas en el Plan de Cuentas.
        </p>
      </ul>
    </div>
  );
};

export default AnexoCargoAsientos;
