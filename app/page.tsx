import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import Container from "@/components/Container";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="">
      <Container>
        <div className="py-5">
          <div className="text-center flex justify-center">
            <Image src="/1.jpg" alt="logo" width={1200} height={1200} />
          </div>
          <div className="text-center flex justify-center">
            <Image src="/2.jpg" alt="logo" width={1200} height={1200} />
          </div>
        </div>
      </Container>
    </main>
  );
}
