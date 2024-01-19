"use server";

import * as z from "zod";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { sendVerificationEmail } from "@/lib/mail";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { generateVerificationToken } from "@/lib/tokens";

export const login = async (
  values: z.infer<typeof LoginSchema>,
  callbackUrl?: string | null
) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos Invalidos!" };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);
  const usuarioInactivo = existingUser?.estado;

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Email no existe!" };
  }
  if (usuarioInactivo == "Inactivo") {
    return {
      error:
        "Usuario Inactivo, porfavor contactarse con servicio tecnico, gracias.",
    };
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email
    );

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token,
      existingUser.name as string
    );

    return { success: "Email de Confirmación Enviado!" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Email o contraseña invalidos" };
        default:
          return { error: "Algo salio mal!" };
      }
    }

    throw error;
  }
};
