"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  LayoutDashboard,
  StarIcon,
  ChevronDown,
  FileText,
  NotebookPen,
  GraduationCap,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";

export default function HeaderAuth() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2 md:space-x-4">
      <SignedIn>
        <Link href="/dashboard" passHref>
          <Button variant="ghost" className="cursor-pointer py-5">
            <LayoutDashboard />
            <span className="hidden md:block sm:hidden">Industry Insight</span>
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
            <DropdownMenuItem>
              <Link href="/resume" className="flex items-center gap-2">
                <FileText />
                <span>Build Resume</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/cover-letter" className="flex items-center gap-2">
                <NotebookPen />
                <span>Cover Letter</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/interviewprep" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                <span>Interview Prep</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

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

      <SignedOut>
        <SignInButton>
          <Button className="cursor-pointer" variant="outline">
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
    </div>
  );
}
