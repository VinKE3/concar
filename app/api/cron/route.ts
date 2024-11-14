import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(request: NextRequest) {
  // if (
  //   request.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`
  // ) {
  //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  // }
  // const authHeader = request.headers.get("Authorization");
  // if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
  //   return new NextResponse(JSON.stringify({ error: "Unauthorized" }), {
  //     status: 401,
  //     headers: { "Content-Type": "application/json" },
  //   });
  // }

  const today = new Date();

  const updatedUsers = await db.user.updateMany({
    where: {
      AND: [{ vencimiento: { lte: today } }, { estado: "Vigente" }],
    },
    data: {
      estado: "Inactivo",
    },
  });

  console.log(`${updatedUsers.count} usuarios actualizados con éxito`);

  return NextResponse.json({ message: "Usuarios actualizados con éxito" });
}
