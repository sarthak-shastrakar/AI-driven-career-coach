import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextStep AI — Your Career Coach",
  description: "Advanced AI-powered career guidance, resume building, and interview preparation.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning={true}>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />
            {/* <footer className="bg-muted/50 py-12">
              <div className="text-gray-200 container text-center">
                <p>In Development Mode </p>
              </div>
            </footer> */}
            <footer className="w-full pt-20 pb-10 bg-muted/30 border-t">
              <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                  <div className="space-y-6">
                    <Link
                      href="/"
                      className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
                    >
                      NextStep AI
                    </Link>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Empowering professionals to achieve their true potential
                      through advanced AI guidance, skill building, and interview
                      intelligence.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-6">Explore</h4>
                    <ul className="space-y-4 text-muted-foreground text-sm">
                      <li>
                        <Link
                          href="/dashboard"
                          className="hover:text-primary transition-colors"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/resume"
                          className="hover:text-primary transition-colors"
                        >
                          Resume Builder
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/interviewprep"
                          className="hover:text-primary transition-colors"
                        >
                          Interview Prep
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/job-finding"
                          className="hover:text-primary transition-colors"
                        >
                          Job Search
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-6">Company</h4>
                    <ul className="space-y-4 text-muted-foreground text-sm">
                      <li>
                        <Link href="#" className="hover:text-primary transition-colors">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:text-primary transition-colors">
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:text-primary transition-colors">
                          Terms of Service
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-6">
                    <h4 className="font-bold text-lg mb-6">Support</h4>
                    <p className="text-muted-foreground text-sm">
                      Need help with our platform? Our team is here to guide you.
                    </p>
                    <Button variant="outline" className="w-full">
                      Contact Support
                    </Button>
                  </div>
                </div>

                <div className="pt-10 border-t flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
                  <p>© 2026 NextStep AI Assistant. All rights reserved.</p>
                  <div className="flex gap-8">
                    <span className="flex items-center gap-2">
                       Final Year Project 2026
                    </span>
                  </div>
                </div>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
