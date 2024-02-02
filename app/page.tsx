import { Poppins } from "next/font/google";
import Container from "@/components/Container";
import Image from "next/image";
import { LoginForm } from "@/components/auth/login-form";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="">
      <Container>
        <div className="py-5">
          <div className="grid grid-cols-2 mb-5">
            <Image
              src="https://miconcar.com/uploads/cmslogin/1_miconcar-web-inicio.jpg"
              alt="logo"
              width={1200}
              height={1200}
            />
            <LoginForm />
          </div>
          <div className="text-center flex justify-center">
            <Image
              src="https://miconcar.com/uploads/cmslogin/miconcar-web-inicio-busca.jpg"
              alt="logo"
              width={1200}
              height={1200}
            />
          </div>
        </div>
      </Container>
    </main>
  );
}
