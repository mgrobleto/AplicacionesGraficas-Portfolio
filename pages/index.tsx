import { Inter } from "next/font/google";
import Intro from "./intro";
import NavbarComponent from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Intro />
    </main>
  );
}
