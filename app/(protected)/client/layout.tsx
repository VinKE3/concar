import { Navbar } from "../_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}
export default function ClienteLayout({ children }: ProtectedLayoutProps) {
  return (
    <div className="flex flex-col gap-y-10 items-center justify-center mt-20">
      <Navbar />
      {children}
    </div>
  );
}
