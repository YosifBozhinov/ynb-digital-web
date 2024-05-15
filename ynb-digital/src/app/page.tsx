import Image from "next/image";
import Logo from "@/components/ui+/logo";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui+/navbar";
import { Section } from "@/components/ui+/section";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
        <Section className="bg-black min-h-svh h-auto rounded-b-3xl"></Section>
      </header>

      <body></body>
    </>
  );
}
