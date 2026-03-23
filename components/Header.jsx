import React from "react";
import Link from "next/link";
import Image from "next/image";
import { checkUser } from "@/lib/checkUser";
import HeaderAuth from "./HeaderAuth";

const Header = async () => {
  await checkUser();
  return (
    <header className="bg-background/50 border-b  ">
      <nav className="container mx-auto px-4 flex h-15 items-center justify-between">
        <Link href="/">
          <Image
            src="/NextStepAIDesign.png"
            alt="ai-coach-platform"
            width={200}
            height={200}
            className="h-40 w-40 py-1"
          />
        </Link>

        <HeaderAuth />
      </nav>
    </header>
  );
};

export default Header;
