import React from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import Logo from "./logo";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="px-10 py-6 grid grid-cols-2 gap-20 justify-between">
          <Logo />
          <div className="justify-self-end flex flex-row gap-2 mix-blend-difference">
            <Button className="">Let's talk</Button>
            <Button
              variant="ghost"
              className="text-black mix-blend-difference flex flex-row gap-2"
            >
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="14"
                  y1="9"
                  x2="4.37114e-08"
                  y2="9"
                  stroke="currentColor"
                />
                <line
                  x1="14"
                  y1="5"
                  x2="4.37114e-08"
                  y2="5"
                  stroke="currentColor"
                />
                <line
                  x1="14"
                  y1="1"
                  x2="4.37114e-08"
                  y2="1"
                  stroke="currentColor"
                />
              </svg>
              Menu
            </Button>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;