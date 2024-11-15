import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(request: NextRequest) {
  // const authHeader = request.headers.get("Authorization");
  // if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
  //   return new NextResponse(JSON.stringify({ error: "Unauthorized" }), {
  //     status: 401,
  //     headers: { "Content-Type": "application/json" },
  //   });
  // }

  // Define `today` y restale un día para obtener `oneDayBefore`
  const today = new Date();
  const oneDayBefore = new Date(today);
  oneDayBefore.setDate(today.getDate() + 1);
  oneDayBefore.setHours(0, 0, 0, 0);

  // Actualiza el estado de los usuarios cuyo vencimiento es un día antes de la fecha actual
  const updatedUsers = await db.user.updateMany({
    where: {
      AND: [{ vencimiento: { lte: oneDayBefore } }, { estado: "Vigente" }],
    },
    data: {
      estado: "Inactivo",
    },
  });

  console.log(`${updatedUsers.count} usuarios actualizados con éxito`);

  return NextResponse.json({ message: "Usuarios actualizados con éxito" });
}
