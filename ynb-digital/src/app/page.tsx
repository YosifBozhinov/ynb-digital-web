import Image from "next/image";
import Logo from "@/components/ui+/logo";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
    <nav>
      <div className="px-10 py-6 grid grid-cols-2 gap-20 justify-between">
      <Logo />
      <Button className="justify-self-end">Let's talk</Button>
      </div>
    </nav>
    </>
  );
}
