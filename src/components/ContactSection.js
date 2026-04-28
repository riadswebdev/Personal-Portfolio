"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactSection() {
  const container = useRef(null);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

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
          <p className="text-on-surface-variant text-body-lg">A creative Frontend Developer focused on modern UI design, responsive web development, and interactive user experiences using React and Next.js.</p>
          
          <div className="space-y-6 pt-4">
            <a href="mailto:mdriadshekh586@gmail.com" className="flex items-center gap-4 group cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary-container transition-all">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="text-xs font-label-caps text-slate-500">EMAIL</p>
                <p className="text-on-surface font-bold">mdriadshekh586@gmail.com</p>
              </div>
            </a>
            
            <a href="tel:+8801314674108" className="flex items-center gap-4 group cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary-container transition-all">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <p className="text-xs font-label-caps text-slate-500">PHONE</p>
                <p className="text-on-surface font-bold">+8801314674108</p>
              </div>
            </a>
            
            <a href="https://wa.me/8801314674108" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary-container transition-all">
                <span className="material-symbols-outlined">chat</span>
              </div>
              <div>
                <p className="text-xs font-label-caps text-slate-500">WHATSAPP</p>
                <p className="text-on-surface font-bold">+8801314674108</p>
              </div>
            </a>
          </div>
        </div>
        
        <div className="flex-1">
          <form className="space-y-4" onSubmit={handleSubmit} action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-label-caps ml-1">IDENTITY</label>
              <input id="name" name="name" required className="w-full bg-slate-900/50 border-0 border-b-2 border-slate-800 focus:border-primary-container focus:ring-0 transition-all rounded-t-lg p-4 text-on-surface" placeholder="Your Name" type="text" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-label-caps ml-1">COMMUNICATION CHANNEL</label>
              <input id="email" name="email" required className="w-full bg-slate-900/50 border-0 border-b-2 border-slate-800 focus:border-primary-container focus:ring-0 transition-all rounded-t-lg p-4 text-on-surface" placeholder="email@address.com" type="email" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-label-caps ml-1">PROJECT SCOPE</label>
              <textarea id="message" name="message" required className="w-full bg-slate-900/50 border-0 border-b-2 border-slate-800 focus:border-primary-container focus:ring-0 transition-all rounded-t-lg p-4 text-on-surface" placeholder="Tell me about your project vision..." rows="4"></textarea>
            </div>
            
            {status === 'success' && (
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm">
                Transmission successful! I'll get back to you shortly.
              </div>
            )}
            
            {status === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                Transmission failed. Please check your form ID or try again.
              </div>
            )}

            <button disabled={status === 'submitting'} className="w-full bg-primary-container text-on-primary-container font-bold py-4 rounded-lg hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:brightness-100 disabled:hover:shadow-none transition-all uppercase tracking-widest mt-4" type="submit">
              {status === 'submitting' ? 'Transmitting...' : 'Send Transmission'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
