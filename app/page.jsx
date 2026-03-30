"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useAnimation, useMotionValue, useTransform, animate } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Star } from "lucide-react";
import Herosection from "@/components/Herosection";
import { features } from "@/data/features";
import { howItWorks } from "@/data/howItWorks";
import { testimonial } from "@/data/testimonial";
import { faqs } from "@/data/faqs";

const CountUp = ({ to, suffix = "", duration = 2 }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration });
      return controls.stop;
    }
  }, [isInView, count, to, duration]);

  return <motion.span ref={nodeRef}>{rounded}</motion.span>;
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Herosection />

      {/* Stats Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="w-full py-16 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-2 text-center text-white">
              <h3 className="text-5xl font-black text-primary tracking-tighter">
                <CountUp to={25} suffix="+" />
              </h3>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">Industries</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center text-white">
              <h3 className="text-5xl font-black text-primary tracking-tighter">
                <CountUp to={1000} suffix="+" />
              </h3>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">Questions</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center text-white">
              <h3 className="text-5xl font-black text-primary tracking-tighter">
                <CountUp to={95} suffix="%" />
              </h3>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">Success Rate</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center text-white">
              <h3 className="text-5xl font-black text-primary tracking-tighter">
                <CountUp to={24} suffix="/7" />
              </h3>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">AI Support</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="w-full py-32 bg-background relative">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10" />
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-4xl mx-auto mb-20 space-y-6"
          >
            <Badge variant="outline" className="px-6 py-1.5 border-primary/20 text-primary bg-primary/5 font-bold tracking-[0.2em] uppercase text-[10px]">Capabilities</Badge>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
              Smarter tools for the <br /> modern career.
            </h2>
            <p className="text-muted-foreground/80 text-xl max-w-2xl mx-auto tracking-tight">
              A comprehensive suite of AI agents designed to navigate every stage of your professional journey.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeIn} whileHover={{ y: -10, scale: 1.02 }} className="transition-all duration-300">
                <Card className="card-premium group hover:border-primary/30 p-2 h-full">
                  <CardContent className="p-8 flex flex-col items-start text-left h-full">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 mb-8 border border-white/5">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors tracking-tight">{feature.title}</h3>
                    <p className="text-muted-foreground/70 leading-relaxed text-base tracking-tight">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="w-full py-32 bg-[#050507]">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-4xl mx-auto mb-20 space-y-6"
          >
            <Badge variant="outline" className="px-6 py-1.5 border-primary/20 text-primary bg-primary/5 font-bold tracking-[0.2em] uppercase text-[10px]">Methodology</Badge>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">How it works.</h2>
            <p className="text-muted-foreground/80 text-xl max-w-2xl mx-auto tracking-tight">
              A streamlined four-step process to accelerate your professional growth.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto relative"
          >
            <div className="hidden lg:block absolute top-[12%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent z-0" />
            
            {howItWorks.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center space-y-8 relative z-10 group"
              >
                <div className="relative">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-24 h-24 rounded-[2rem] bg-white/5 flex items-center justify-center text-primary transition-all duration-500 border border-white/10 shadow-2xl"
                  >
                    {item.icon}
                  </motion.div>
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-black shadow-xl border-4 border-[#050507]">
                    {index + 1}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-bold text-2xl text-white tracking-tight">{item.title}</h3>
                  <p className="text-muted-foreground/70 leading-relaxed max-w-[280px] mx-auto text-base tracking-tight">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="w-full py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-4xl mx-auto mb-20 space-y-6"
          >
             <Badge variant="outline" className="px-6 py-1.5 border-primary/20 text-primary bg-primary/5 font-bold tracking-[0.2em] uppercase text-[10px]">Proof of Impact</Badge>
             <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">Success Stories.</h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {testimonial.map((testimonial, index) => (
              <motion.div key={index} variants={fadeIn} whileHover={{ y: -10, scale: 1.01 }} className="transition-all duration-300">
                <Card className="card-premium group hover:border-primary/20 h-full">
                  <CardContent className="p-10 space-y-8 flex flex-col justify-between h-full">
                    <div className="space-y-6">
                      <div className="flex gap-1 text-primary">
                        {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                      </div>
                      <blockquote className="text-white/90 italic text-xl leading-relaxed tracking-tight">
                        &quot;{testimonial.quote}&quot;
                      </blockquote>
                    </div>
                    <div className="flex items-center space-x-5 pt-6 border-t border-white/5">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={56}
                        height={56}
                        className="rounded-2xl border border-white/10 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div>
                        <p className="font-bold text-white text-lg tracking-tight">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground font-medium">{testimonial.role} at {testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="w-full py-32 bg-[#050507]">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-20 space-y-6"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">Common Questions.</h2>
            <p className="text-muted-foreground/80 text-xl tracking-tight">Everything you need to know about the NextStep ecosystem.</p>
          </motion.div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="border border-white/5 rounded-[2rem] px-8 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 overflow-hidden">
                  <AccordionTrigger className="text-left text-lg font-bold hover:no-underline py-8 text-white tracking-tight">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground/80 pb-8 text-lg leading-relaxed tracking-tight">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Professional CTA section */}
      <section className="relative w-full py-32 overflow-hidden bg-[#050507] flex items-center">
        {/* Animated Cinematic Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-1/4 w-[1000px] h-[1000px] bg-primary/10 blur-[200px] rounded-full animate-mesh opacity-40" />
          <div className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-[#818cf8]/5 blur-[180px] rounded-full animate-mesh opacity-30 [animation-delay:-5s]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050507] via-transparent to-[#050507] z-10" />
          <div className="absolute inset-0 z-0 opacity-10 bg-[url('/noise.png')] mix-blend-overlay" />
        </div>

        <div className="relative z-20 w-full px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto space-y-12"
          >
            <div className="space-y-6">
               <motion.div
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
               >
                 <Badge variant="outline" className="px-5 py-1.5 border-primary/20 text-primary bg-primary/10 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 rounded-full">Evolutionary Leap</Badge>
               </motion.div>
               
               <h2 className="text-5xl md:text-7xl font-black tracking-[-0.04em] text-white leading-[1.1] mb-8">
                 Scale Your <br />
                 <span className="bg-gradient-to-r from-primary via-[#818cf8] to-[#c084fc] bg-clip-text text-transparent italic">Professional Future.</span>
               </h2>
               
               <motion.p 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.4 }}
                 className="text-muted-foreground/80 text-lg md:text-xl max-w-2xl mx-auto tracking-tight pt-2 leading-relaxed"
               >
                 Join a global network of elite professionals leveraging <br className="hidden md:block" />
                 advanced AI to architect their professional legacy.
               </motion.p>
            </div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.6 }}
               className="flex justify-center items-center pt-4"
            >
              <Link href="/dashboard" className="w-full sm:w-auto">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="btn-premium-glow relative h-16 px-12 text-xl font-bold rounded-2xl border-none w-full"
                  >
                    Enter NextStep
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Shimmer Overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden opacity-50">
           <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] animate-shimmer-slow" />
        </div>
      </section>
    </main>
  );
}
