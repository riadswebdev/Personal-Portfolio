"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function ProjectModal({ project, onClose }) {
  const overlayRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";
    
    // Animate in
    gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
    gsap.fromTo(modalRef.current, { y: 50, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" });

    // Close on escape key
    const handleEsc = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const handleClose = () => {
    // Animate out and call onClose after
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.3 });
    gsap.to(modalRef.current, { 
      y: 50, opacity: 0, scale: 0.95, duration: 0.3, ease: "power3.in", 
      onComplete: onClose 
    });
  };

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-8">
      {/* Overlay - click to close */}
      <div 
        ref={overlayRef} 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm cursor-pointer" 
        onClick={handleClose}
      ></div>
      
      {/* Modal Content */}
      <div 
        ref={modalRef} 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl border border-primary-container/20 shadow-[0_0_40px_rgba(0,240,255,0.1)] z-10 flex flex-col md:flex-row bg-surface"
      >
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-surface/50 text-white hover:bg-primary-container hover:text-on-primary-container transition-colors z-20 backdrop-blur-md border border-white/10"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>
        
        <div className="w-full md:w-1/2 h-64 md:h-auto min-h-[300px] relative">
          <Image 
            src={project.image} 
            alt={project.alt} 
            fill 
            className="object-cover object-center" 
            unoptimized 
          />
        </div>
        
        <div className="w-full md:w-1/2 p-8 flex flex-col">
          <h3 className="text-h3 font-h3 mb-2">{project.title}</h3>
          <p className="text-on-surface-variant mb-6 text-sm">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <span key={i} className="bg-surface-variant px-3 py-1 rounded-full text-xs font-bold text-primary-container border border-primary-container/10">
                {tag}
              </span>
            ))}
          </div>

          {project.features && (
            <div className="mb-8 flex-1">
              <h4 className="font-label-caps text-xs text-primary-container mb-3">Key Features</h4>
              <ul className="text-sm text-on-surface-variant space-y-2">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-container inline-block shrink-0 shadow-[0_0_5px_rgba(0,240,255,0.5)]"></span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex gap-4 mt-auto">
            <a 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 py-3 rounded-xl bg-primary-container text-on-primary-container font-bold text-center hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all hover:-translate-y-1"
            >
              Live Demo
            </a>
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 py-3 rounded-xl border border-primary-container/30 text-primary-container font-bold text-center hover:bg-primary-container/10 transition-all hover:-translate-y-1"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
