import React from "react";
import Link from "next/link";
// import { Button } from "./ui/button";

export default function NotFoundPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "10%" }}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">
        {/* <Button variant="outline" className="cursor-pointer" size="lg">
          <span>Return Home</span>
        </Button> */}
      </Link>
    </div>
  );
}
