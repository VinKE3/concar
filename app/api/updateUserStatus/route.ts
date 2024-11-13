import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  const hoy = new Date();
  // Encuentra todos los usuarios con vencimiento en el pasado y estado vigente
  const usuariosVencidos = await db.user.findMany({
    where: {
      vencimiento: {
        lt: hoy,
      },
      estado: "Vigente",
    },
  });
  // Actualiza el estado de esos usuarios a "Inactivo"
  await Promise.all(
    usuariosVencidos.map((usuario) =>
      db.user.update({
        where: { id: usuario.id },
        data: { estado: "Inactivo" },
      })
    )
  );
  return NextResponse.json({ message: "Usuarios actualizados con éxito" });
}
