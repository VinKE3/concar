"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-secondary  p-4 rounded-xl w-[600px] shadow-sm">
      <div className="flex  justify-between text-center items-center gap-x-2">
        <Button
          asChild
          variant={pathname === "/client/datos" ? "default" : "outline"}
        >
          <Link href="/client/datos">Mis Datos</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/client/empresa" ? "default" : "outline"}
        >
          <Link href="/client/empresa">Mi Empresa</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/client/password" ? "default" : "outline"}
        >
          <Link href="/client/password">Cambiar Password</Link>
        </Button>
      </div>
    </nav>
  );
};
