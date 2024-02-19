import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="space-y-3">
      <Image
        src="https://miconcar.com/uploads/documentos/actualizacion-real-key-paso1.jpg"
        alt="tabla general concar"
        width={500}
        height={500}
      />
    </div>
  );
};

export default page;
