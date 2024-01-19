import { UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
  cargo: string;
  telefono: string;
  ambiente: string;
  tipo: string;
  estado: string;
  vencimiento: Date;
  fechaNacimiento: Date;
  empresa: Empresa;
};
// Define el tipo Empresa
export type Empresa = {
  ruc: string | null;
  nombre: string | null;
  documento: string | null;
  telefono: string | null;
  empresa: string | null;
  email: string | null;
  fechaAniversario: Date | null;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
