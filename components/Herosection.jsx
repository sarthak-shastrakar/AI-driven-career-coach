"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Target, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useAnimation, useMotionValue, useSpring, useTransform } from "framer-motion";

const Herosection = () => {
  const imageRef = useRef(null);
  const isInView = useInView(imageRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 30 };
  const xSpring = useSpring(mouseX, springConfig);
  const ySpring = useSpring(mouseY, springConfig);

  const rotateX = useTransform(ySpring, [-300, 300], [10, -10]);
  const rotateY = useTransform(xSpring, [-300, 300], [-10, 10]);

  const statsX = useTransform(xSpring, [-300, 300], [20, -20]);
  const statsY = useTransform(ySpring, [-300, 300], [20, -20]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX - innerWidth / 2);
      mouseY.set(clientY - innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isInView, controls, mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section className="relative w-full py-24 md:py-40 px-4 overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center space-y-16"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl text-primary text-sm font-black tracking-[0.2em] uppercase">
              <Sparkles className="h-4 w-4" />
              The Future of Career Growth
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="space-y-8 max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.95] text-white">
              Elevate Your Career with
              <span className="block mt-4 bg-gradient-to-r from-primary via-[#818cf8] to-[#c084fc] bg-clip-text text-transparent">
                NextStep AI
              </span>
            </h1>

            <p className="mx-auto max-w-[800px] text-lg md:text-2xl text-muted-foreground/80 leading-relaxed tracking-tight pt-2">
              Master your industry with AI-driven insights, personalized resume
              building, and real-world interview preparation tailored for the
              modern professional.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex justify-center w-full pt-4">
            <Link href="/dashboard" className="w-full sm:w-auto">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="btn-premium-glow h-16 px-12 text-xl font-bold rounded-2xl cursor-pointer w-full sm:w-auto"
                >
                  Start Journey Free
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Hero Image Container */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: {
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.6,
                },
              },
            }}
            style={{ rotateX, rotateY, perspective: 1000 }}
            className="relative w-full max-w-6xl mx-auto mt-20 group"
          >
            {/* Visual Effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-[3rem] blur-3xl -z-10 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative rounded-[3rem] border border-white/10 overflow-hidden bg-[#050507] shadow-3xl">
               <Image
                src="/midnight-hero.png"
                alt="NextStep AI Hero Dashboard"
                width={1400}
                height={800}
                priority
                className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-1000"
              />
            </div>
            
            {/* Floating Stats or Badges */}
            <motion.div 
               animate={{ y: [0, -15, 0] }}
               style={{ x: statsX, y: statsY }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-10 -left-10 hidden lg:flex items-center gap-4 p-6 glass rounded-3xl z-20 shadow-2xl"
            >
                <div className="p-3 bg-primary/20 rounded-2xl text-primary"><Target className="h-6 w-6" /></div>
                <div>
                  <p className="font-black text-white text-xl">98%</p>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Accuracy</p>
                </div>
            </motion.div>

            <motion.div 
               animate={{ y: [0, 15, 0] }}
               style={{ x: statsX, y: statsY }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute top-40 -right-12 hidden lg:flex items-center gap-4 p-6 glass rounded-3xl z-20 shadow-2xl"
            >
                <div className="p-3 bg-[#818cf8]/20 rounded-2xl text-[#818cf8]"><Zap className="h-6 w-6" /></div>
                <div>
                  <p className="font-black text-white text-xl">Adaptive</p>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Real-time learning</p>
                </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Herosection;
