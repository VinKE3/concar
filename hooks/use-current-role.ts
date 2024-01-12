import { useSession } from "next-auth/react";
import { Session } from "next-auth/types";

type UserWithRole = Session["user"] & {
  role: string; // Asegúrate de que el tipo de 'role' coincide con tu definición
};

export const useCurrentRole = () => {
  const session = useSession();
  const user = session.data?.user as UserWithRole;

  return user?.role;
};
