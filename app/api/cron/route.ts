import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(request: NextRequest) {
  // Define `today` y configura `oneDayBefore` como el día siguiente en UTC
  const today = new Date();
  const oneDayBefore = new Date(
    Date.UTC(
      today.getUTCFullYear(),
      today.getUTCMonth(),
      today.getUTCDate() + 1
    )
  );

  // Busca usuarios con vencimiento menor o igual a `oneDayBefore` y estado "Vigente"
  const updatedUsers = await db.user.updateMany({
    where: {
      AND: [{ vencimiento: { lte: oneDayBefore } }, { estado: "Vigente" }],
    },
    data: {
      estado: "Inactivo",
    },
  });

  console.log(`${updatedUsers.count} usuarios actualizados con éxito`);
  console.log("Hoy (UTC):", today.toISOString());
  console.log("Un día antes (UTC):", oneDayBefore.toISOString());

  return NextResponse.json({ message: "Usuarios actualizados con éxito" });
}
