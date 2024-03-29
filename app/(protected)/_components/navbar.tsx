"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";

export const Navbar = () => {
  const pathname = usePathname();
  const currentUser = useCurrentUser();

  const admin = currentUser?.role === "ADMIN";

  return (
    <nav className="bg-secondary  p-4 rounded-xl w-auto md:w-[600px] shadow-sm">
      <div className="flex  justify-between text-center items-center gap-x-2">
        <Button
          asChild
          variant={pathname === "/client/datos" ? "default" : "outline"}
        >
          <Link href="/client/datos">Modificar</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/client/mis-datos" ? "default" : "outline"}
        >
          <Link href="/client/mis-datos">Mis Datos</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/client/empresa" ? "default" : "outline"}
        >
          <Link href="/client/empresa">Mi Empresa</Link>
        </Button>

        <Button
          asChild
          variant={pathname === "/client/admin" ? "default" : "outline"}
        >
          <Link href="/client/admin">Admin</Link>
        </Button>
      </div>
    </nav>
  );
};
