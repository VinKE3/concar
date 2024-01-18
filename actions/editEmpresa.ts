"use server";

import * as z from "zod";

import { update } from "@/auth";
import { db } from "@/lib/db";
import { EmpresaSchema } from "@/schemas";
import { getUserById } from "@/data/user";

export const editEmpresa = async (
  id: string,
  values: z.infer<typeof EmpresaSchema>
) => {
  const dbUser = await getUserById(id);

  if (!dbUser) {
    return { error: "No Autorizado" };
  }

  let updatedEmpresa;

  const existingEmpresa = await db.empresa.findUnique({
    where: { id: dbUser.id },
  });

  if (existingEmpresa) {
    updatedEmpresa = await db.empresa.update({
      where: { id: dbUser.id },
      data: { ...values },
    });
  } else {
    const existingEmpresaWithSameUserId = await db.empresa.findUnique({
      where: { userId: dbUser.id },
    });

    if (existingEmpresaWithSameUserId) {
      updatedEmpresa = await db.empresa.update({
        where: { userId: dbUser.id },
        data: { ...values },
      });
    } else {
      updatedEmpresa = await db.empresa.create({
        data: { ...values, userId: dbUser.id },
      });
    }
  }

  const updatedUser = await db.user.update({
    where: { id: dbUser.id },
    data: {
      empresa: {
        connect: {
          id: updatedEmpresa.id,
        },
      },
    },
  });

  update({
    user: updatedUser as any,
  });

  return { success: "Datos Actualizados!" };
};
