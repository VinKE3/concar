import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "ConcarWeb",
  description: "ConcarWeb",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const currentUser = session?.user;

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={`${poppins.className} bg-slate-50 text-slate-700`}>
          <Toaster richColors />
          <NavBar currentUser={currentUser} />
          {children}
          <Footer />
        </body>
      </html>
    </SessionProvider>
  );
}
