
import React from "react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  // DropdownMenuLabel,
  // DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { StarIcon } from "lucide-react";
import { LayoutDashboard } from "lucide-react";
import { FileText } from "lucide-react";
import { NotebookPen } from "lucide-react";
import { GraduationCap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import "../styles/header.css";
import { checkUser } from "@/lib/checkUser";

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

        <div className="flex items-center space-x-2 md:space-x-4" suppressHydrationWarning>
          <SignedIn>
            <Link href="/dashboard" passHref>
              <Button variant="ghost" className="cursor-pointer py-5">
                <LayoutDashboard />
                <span className="hidden md:block sm:hidden">
                  Industry Insight
                </span>
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>
                  <StarIcon className="h-5 w-5" />
                  <span className="cursor-pointer hidden md:block">
                    Career Boost
                  </span>
                  <ChevronDown className="ml-1 h-4 w-2 cursor-pointer" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
                {/* <DropdownMenuSeparator /> */}
                <DropdownMenuItem>
                  <Link href="/resume" className="flex items-center gap-2">
                    <FileText />
                    <span>Build Resume</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/cover-letter"
                    className="flex items-center gap-2"
                  >
                    <NotebookPen />
                    <span>Cover Letter</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/interviewprep"
                    className="flex items-center gap-2"
                  >
                    <GraduationCap className="h-4 w-4" />
                    <span>Interview Prep</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button className=" cursor-pointer" variant="outline">
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
