"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";
// import "../styles/dashboard.css";
const Herosection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 200;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  // particle animation
  useEffect(() => {
    document.querySelectorAll(".rain-drop").forEach((drop) => {
      drop.style.left = `${Math.random() * 100}vw`;
      drop.style.animationDuration = `${20 + Math.random() * 6}s, ${
        2 + Math.random() * 2
      }s`;
      drop.style.animationDelay = `${Math.random() * -10}s`;
    });
  }, []);

  return (
    <section className="w-full pt-16 pb-32 overflow-hidden">
      <div className="rain-container">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="rain-drop"></span>
        ))}
      </div>

      <div className="app-content">
        {/* Your full page content */}

        {/* Your hero / footer content */}

        <div className="text-center space-y-8">
          {/* Heading */}
          <div className="space-y-4 mx-auto">
            <h1 className="text-4xl font-bold md:text-6xl lg:text-4xl xl:text-6xl font-inter">
              <span
                className="
            flex justify-center leading-tight
            animate-in fade-in slide-in-from-bottom-6
            duration-1000 ease-out
          "
              >
                NextStep AI — Guiding Your Career Journey
              </span>

              <span
                className="
            block mt-3 text-accent text-2xl
            animate-in fade-in slide-in-from-bottom-4
            duration-1000 delay-200 ease-out
          "
              >
                Smart career insights, skill growth, and interview prep—tailored
                for your success
              </span>
            </h1>

            <p
              className="
          mx-auto max-w-[600px] text-muted-foreground
          animate-in fade-in slide-in-from-bottom-3
          duration-1000 delay-300 ease-out
        "
            >
              Get tailored recommendations on what skills to learn next, based
              on your career goals and industry trends. Stay ahead of the
              competition with focused growth.
            </p>
          </div>

          {/* Buttons */}
          <div
            className="
        flex justify-center space-x-4
        animate-in fade-in slide-in-from-bottom-3
        duration-1000 delay-500 ease-out
      "
          >
            <Link href="/dashboard">
              <Button
                variant="outline"
                size="lg"
                className="
            cursor-pointer
            transition-all duration-300
            hover:scale-[1.03] hover:shadow-lg
            active:scale-[0.97]
          "
              >
                Get Started
              </Button>
            </Link>

            {/* <Link href="">
              <Button
                variant="ghost"
                size="lg"
                className="
            cursor-pointer
            transition-all duration-300
            hover:scale-[1.03]
            active:scale-[0.97]
          "
              >
                Home
              </Button>
            </Link> */}
          </div>

          {/* Image */}
          <div className="hero-image-wrapper mt-8 md:mt-0">
            <div
              ref={imageRef}
              className="
          hero-image
          animate-in fade-in slide-in-from-bottom-8
          duration-1200 delay-700 ease-out
        "
            >
              <Image
                src="/ai-assistant-1.jpg"
                width={1020}
                height={420}
                className="
            rounded-lg border mx-auto h-96 shadow-2xl
            transition-transform duration-500
            hover:scale-[1.01]
          "
                alt="AI-coach Banner"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
