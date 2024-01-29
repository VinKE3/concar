import React from "react";

const page = () => {
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso</h1>
      <p>
        ¿En qué formatos se puede cargar el estado de cuenta del banco para
        realizar la conciliación bancaria?
      </p>
      <h1 className="font-bold">Solución</h1>
      <p>
        En el CONCAR CB, el estado de cuenta se ingresa manualmente a través de
        la opción Conciliación Bancaria / Registro Estado Cuenta/ Registro
        Estado Cuenta. No es posible importar el estado de cuenta.
      </p>
      <p>
        En el CONCAR SQL, el estado de cuenta (en formato Excel) se puede
        importar a través del CONCAR NET. También se puede ingresar manualmente
        por la opción Conciliación Bancaria / Registro Estados Cuenta/ Registro
        Estado Cuenta.
      </p>
    </div>
  );
};

export default page;
