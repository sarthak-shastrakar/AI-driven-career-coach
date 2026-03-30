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
  Briefcase,
  Menu,
  X,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function HeaderAuth() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const navLinks = [
    { href: "/resume", label: "Build Resume", icon: FileText },
    { href: "/cover-letter", label: "Cover Letter", icon: NotebookPen },
    { href: "/interviewprep", label: "Interview Prep", icon: GraduationCap },
    { href: "/job-finding", label: "Explore Jobs", icon: Briefcase },
  ];

  return (
    <div className="flex items-center">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-4">
        <SignedIn>
          <Link href="/dashboard" passHref>
            <Button variant="ghost" className="cursor-pointer">
              <LayoutDashboard className="h-4 w-4 mr-2" />
              <span>Industry Insight</span>
            </Button>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="cursor-pointer">
                <StarIcon className="h-4 w-4 mr-2" />
                <span>Career Boost</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {navLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href} className="flex items-center gap-2 cursor-pointer w-full">
                    <link.icon className="h-4 w-4" />
                    <span>{link.label}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-9 h-9 border border-primary/20",
                userButtonPopoverCard: "shadow-xl border border-border",
              },
            }}
            afterSignOutUrl="/"
          />
        </SignedIn>

        <SignedOut>
          <SignInButton mode="modal">
            <Button className="cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
              Sign In
            </Button>
          </SignInButton>
        </SignedOut>
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden flex items-center space-x-3">
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-8 h-8",
              },
            }}
            afterSignOutUrl="/"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </SignedIn>

        <SignedOut>
          <SignInButton mode="modal">
            <Button variant="outline" size="sm">Sign In</Button>
          </SignInButton>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </SignedOut>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-background/95 backdrop-blur-md transition-all duration-300 md:hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col h-full p-6 pt-20 space-y-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4"
          >
            <X className="h-6 w-6" />
          </Button>

          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/40 bg-clip-text text-transparent mb-8 tracking-tighter"
          >
            NextStep AI
          </Link>

          <SignedIn>
            <Link
              href="/dashboard"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-4 p-4 rounded-2xl bg-primary/10 text-primary font-medium border border-primary/10"
            >
              <LayoutDashboard className="h-5 w-5" />
              <span>Dashboard (Insights)</span>
            </Link>

            <div className="pt-6 pb-2 text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] px-2">
              Career Evolution
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5"
              >
                <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                <span className="text-lg">{link.label}</span>
              </Link>
            ))}
          </SignedIn>

          <SignedOut>
             <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted transition-colors"
              >
                <StarIcon className="h-5 w-5 text-muted-foreground" />
                <span className="text-lg">Home</span>
              </Link>
            <SignInButton mode="modal">
              <Button className="w-full h-12 text-lg mt-4" onClick={() => setIsMobileMenuOpen(false)}>
                Sign In to Start
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
