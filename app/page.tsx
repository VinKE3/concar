import { Poppins } from "next/font/google";
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
