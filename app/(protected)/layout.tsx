import { Navbar } from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* <div className="flex justify-center">
          <Navbar />
        </div> */}
        {children}
      </main>
    </div>
  );
};

export default ProtectedLayout;
