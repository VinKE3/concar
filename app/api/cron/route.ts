import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(request: NextRequest) {
  // if (
  //   request.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`
  // ) {
  //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  // }
  const authHeader = request.headers.get("Authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const hoy = new Date();

  const usuariosVencidos = await db.user.findMany({
    where: {
      vencimiento: {
        lt: hoy,
      },
      estado: "Vigente",
    },
  });

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
