import { Inter } from "next/font/google";
import Intro from "./intro";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Intro />
    </main>
  );
}
