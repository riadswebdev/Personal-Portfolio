"use client";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeroSection() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Stagger text and buttons
    tl.from(".hero-content > *", {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      delay: 0.2
    })
    // Animate the image in
    .from(".hero-image-container", {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out"
    }, "-=0.8")
    // Fade in the background glow smoothly
    .from(".hero-bg-glow", {
      opacity: 0,
      duration: 2,
      ease: "none"
    }, 0);
  }, { scope: container });

  return (
    <section ref={container} className="min-h-[819px] flex flex-col md:flex-row items-center justify-between py-section-gap gap-stack-lg relative" id="home">
      <div className="hero-bg-glow absolute top-0 left-0 w-96 h-96 bg-primary-container/10 blur-[120px] -z-10 rounded-full"></div>
      
      <div className="hero-content flex-1 space-y-stack-md text-center md:text-left">
        <p className="font-label-caps text-label-caps text-primary-container uppercase">Frontend Architect</p>
        <h1 className="font-h1 text-h1 text-on-surface max-w-2xl">
          Building the Future of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-tertiary-container">Web</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
         A creative Frontend Developer focused on modern UI design, responsive web development, and interactive user experiences using React and Next.js.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-stack-md justify-center md:justify-start">
          <a href="/myself.pdf" download="myself.pdf" className="bg-primary-container text-on-primary-container px-6 py-3 rounded-lg font-bold text-xl hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all text-center">
            Get CV
          </a>
          <div className="flex gap-4">
            <a className="w-12 h-12 flex items-center justify-center rounded-full glass-card hover:text-primary-container hover:scale-110 transition-all" href="https://www.linkedin.com/in/riad-shekh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a className="w-12 h-12 flex items-center justify-center rounded-full glass-card hover:text-primary-container hover:scale-110 transition-all" href="https://github.com/djriad157764-creator" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a className="w-12 h-12 flex items-center justify-center rounded-full glass-card hover:text-primary-container hover:scale-110 transition-all" href="https://x.com/md32316" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="hero-image-container flex-1 flex justify-center md:justify-end relative">
        <div className="relative w-80 h-80 md:w-96 md:h-96">
          <div className="absolute inset-0 rounded-3xl border-2 border-primary-container/30 rotate-6 -z-10"></div>
          <div className="absolute inset-0 rounded-3xl border-2 border-tertiary-container/20 -rotate-3 -z-10"></div>
          <div className="w-full h-full object-cover rounded-3xl shadow-2xl glass-card p-2 overflow-hidden relative">
            <Image 
              src="https://i.ibb.co.com/5X4sD47X/riad.png" 
              alt="Professional profile" 
              fill
              className="object-cover drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
