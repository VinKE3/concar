import Container from "@/components/Container";
import Image from "next/image";
import { LoginForm } from "@/components/auth/login-form";

export default function Home() {
  return (
    <main className="">
      <Container>
        <div className="py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 mb-5">
            <Image src="/inicio/1.jpg" alt="logo" width={1200} height={1200} />
            <LoginForm />
          </div>
          <div className="space-y-10">
            <div className="text-center flex justify-center">
              <Image
                src="/inicio/2.jpg"
                alt="logo"
                width={1200}
                height={1200}
              />
            </div>
            <div className="text-center flex justify-center">
              <Image
                src="/inicio/3.jpg"
                alt="logo"
                width={1200}
                height={1200}
              />
            </div>
            <div className="text-center flex justify-center">
              <Image
                src="/inicio/4.jpg"
                alt="logo"
                width={1200}
                height={1200}
              />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
