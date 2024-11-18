import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    // Define la fecha actual y el día siguiente a medianoche en UTC
    const today = new Date();
    const nextDayMidnightUTC = new Date(
      Date.UTC(
        today.getUTCFullYear(),
        today.getUTCMonth(),
        today.getUTCDate() + 1
      )
    );

    // Actualiza usuarios con vencimiento menor o igual a `nextDayMidnightUTC`
    const updatedUsers = await db.user.updateMany({
      where: {
        AND: [
          { vencimiento: { lte: nextDayMidnightUTC } },
          { estado: "Vigente" },
        ],
      },
      data: {
        estado: "Inactivo",
      },
    });

    // Registra información relevante
    console.log("Hoy (UTC):", today.toISOString());
    console.log(
      "Siguiente día a medianoche (UTC):",
      nextDayMidnightUTC.toISOString()
    );
    console.log(
      `${updatedUsers.count || 0} usuario(s) actualizado(s) con éxito`
    );

    // Respuesta
    return NextResponse.json({
      message: `${updatedUsers.count || 0} usuario(s) actualizado(s) con éxito`,
    });
  } catch (error) {
    console.error("Error al actualizar usuarios:", error);

    return NextResponse.json(
      { error: "Ocurrió un error al actualizar usuarios" },
      { status: 500 }
    );
  }
}
