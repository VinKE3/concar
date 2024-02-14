import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { UserRole } from "@prisma/client";
import { getUserById } from "@/data/user";
import { Empresa } from "./next-auth";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) return user;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      // Allow OAuth without email verification
      if (account?.provider !== "credentials") return true;

      const existingUser = await getUserById(user.id);

      // // Prevent sign in without email verification
      // if (!existingUser?.emailVerified) return false;

      return true;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.cargo = token.cargo as string;
        session.user.telefono = token.telefono as string;
        session.user.ambiente = token.ambiente as string;
        session.user.tipo = token.tipo as string;
        session.user.estado = token.estado as string;
        session.user.vencimiento = token.vencimiento as Date;
        session.user.fechaNacimiento = token.fechaNacimiento as Date;
        session.user.empresa = token.empresa as Empresa;
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.name = existingUser.name;
      token.email = existingUser.email;
      token.role = existingUser.role;
      token.cargo = existingUser.cargo;
      token.telefono = existingUser.telefono;
      token.ambiente = existingUser.ambiente;
      token.tipo = existingUser.tipo;
      token.estado = existingUser.estado;
      token.vencimiento = existingUser.vencimiento;
      token.fechaNacimiento = existingUser.fechaNacimiento;
      token.empresa = existingUser.empresa;
      return token;
    },
  },
} satisfies NextAuthConfig;
