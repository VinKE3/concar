import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// Extiende Day.js con el plugin UTC
dayjs.extend(utc);

export async function GET(request: NextRequest) {
  try {
    // Define la fecha actual y el día siguiente a medianoche en UTC
    const today = dayjs().utc(); // Fecha actual en UTC
    const nextDayMidnightUTC = today.add(1, "day").startOf("day"); // Próximo día a medianoche en UTC

    // Busca usuarios con vencimiento menor o igual a `nextDayMidnightUTC` y estado "Vigente"
    const usersToUpdate = await db.user.findMany({
      where: {
        AND: [
          { vencimiento: { lte: nextDayMidnightUTC.toDate() } }, // Convierte a Date para Prisma
          { estado: "Vigente" },
        ],
      },
    });

    console.log("Usuarios a actualizar:", usersToUpdate);

    // Actualiza el estado de los usuarios
    const updatedUsers = await db.user.updateMany({
      where: {
        AND: [
          { vencimiento: { lte: nextDayMidnightUTC.toDate() } },
          { estado: "Vigente" },
        ],
      },
      data: {
        estado: "Inactivo",
      },
    });

    // Registra información relevante
    console.log("Hoy (UTC):", today.format());
    console.log(
      "Siguiente día a medianoche (UTC):",
      nextDayMidnightUTC.format()
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
