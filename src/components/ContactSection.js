"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactSection() {
  const container = useRef(null);

  useGSAP(() => {
    // Fade up animation for the contact card
    gsap.from(".contact-card", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      },
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-section-gap relative" id="contact">
      <div className="absolute -bottom-24 right-0 w-80 h-80 bg-tertiary-container/10 blur-[100px] -z-10 rounded-full"></div>
      
      <div className="contact-card glass-card rounded-[2rem] p-stack-lg md:p-16 flex flex-col md:flex-row gap-12 border-primary-container/20">
        <div className="flex-1 space-y-stack-md">
          <h2 className="text-h2 font-h2">Initiate <span className="text-primary-container">Contact</span></h2>
          <p className="text-on-surface-variant text-body-lg">Have a vision for a groundbreaking project? Let's discuss how my technical architecture can help you achieve it.</p>
          
          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary-container transition-all">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="text-xs font-label-caps text-slate-500">EMAIL</p>
                <p className="text-on-surface font-bold">hello@devarchitect.io</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary-container transition-all">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <p className="text-xs font-label-caps text-slate-500">PHONE</p>
                <p className="text-on-surface font-bold">+1 (555) 890-4421</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary-container transition-all">
                <span className="material-symbols-outlined">chat</span>
              </div>
              <div>
                <p className="text-xs font-label-caps text-slate-500">WHATSAPP</p>
                <p className="text-on-surface font-bold">+1 (555) 890-4422</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-1">
          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-label-caps ml-1">IDENTITY</label>
              <input className="w-full bg-slate-900/50 border-0 border-b-2 border-slate-800 focus:border-primary-container focus:ring-0 transition-all rounded-t-lg p-4 text-on-surface" placeholder="Your Name" type="text" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-label-caps ml-1">COMMUNICATION CHANNEL</label>
              <input className="w-full bg-slate-900/50 border-0 border-b-2 border-slate-800 focus:border-primary-container focus:ring-0 transition-all rounded-t-lg p-4 text-on-surface" placeholder="email@address.com" type="email" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-label-caps ml-1">PROJECT SCOPE</label>
              <textarea className="w-full bg-slate-900/50 border-0 border-b-2 border-slate-800 focus:border-primary-container focus:ring-0 transition-all rounded-t-lg p-4 text-on-surface" placeholder="Tell me about your project vision..." rows="4"></textarea>
            </div>
            <button className="w-full bg-primary-container text-on-primary-container font-bold py-4 rounded-lg hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all uppercase tracking-widest mt-4" type="submit">
              Send Transmission
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
