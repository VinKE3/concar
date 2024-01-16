import { UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
  cargo: string;
  telefono: string;
  ambiente: string;
  tipo: string;
  estado: string;
  vencimiento: Date;
  fechaNacimiento: Date;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
