"use client";
import Image from "next/image";
import { useState } from "react";
import { useLenis } from "lenis/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TopNavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const lenis = useLenis();

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (lenis) {
      lenis.scrollTo(targetId, { offset: -80 }); // offset for fixed header
    }
  };

  useGSAP(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];
    
    // We wait a tick to ensure elements are mounted before ScrollTrigger runs
    setTimeout(() => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          ScrollTrigger.create({
            trigger: element,
            start: "top center",
            end: "bottom center",
            onToggle: (self) => {
              if (self.isActive) {
                setActiveSection(section);
              }
            }
          });
        }
      });
    }, 100);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const getDesktopLinkClasses = (section) => {
    const isActive = activeSection === section;
    return `transition-all duration-300 ${
      isActive 
        ? "text-cyan-400 border-b-2 border-cyan-400 pb-1 font-bold" 
        : "text-slate-400 font-medium hover:text-cyan-300 hover:drop-shadow-[0_0_5px_rgba(0,240,255,0.4)]"
    }`;
  };

  const getMobileLinkClasses = (section) => {
    const isActive = activeSection === section;
    return `w-full transition-all duration-300 ${
      isActive 
        ? "text-cyan-400 font-bold border-l-4 border-cyan-400 pl-4 py-2 bg-cyan-400/10 -ml-4" 
        : "text-slate-400 font-medium hover:text-cyan-300 py-2"
    }`;
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 bg-slate-950/70 backdrop-blur-xl border-b border-cyan-400/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className="flex justify-between items-center h-20 px-8 max-w-[1280px] mx-auto font-h1 antialiased tracking-tight relative">
        <div className="text-2xl font-bold">
         <Image
          src="https://i.ibb.co.com/xt1Q7VQz/Designer-1.png"
          alt="Logo"
          width={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          height={100}
          className="object-cover w-20 sm:w-25 cursor-pointer"
          onClick={(e) => handleNavClick(e, '#home')}
         /> 
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`}
              className={getDesktopLinkClasses(item.id)}
              onClick={(e) => handleNavClick(e, `#${item.id}`)}
            >
              {item.label}
            </a>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <button className="hidden sm:block active:scale-95 transition-transform bg-primary-container text-lg text-on-primary-container px-5 py-2 rounded-lg font-bold hover:brightness-110">
            CV
          </button>
          <span className="hidden sm:block material-symbols-outlined text-cyan-400 cursor-pointer hover:rotate-12 transition-transform">terminal</span>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden flex items-center justify-center p-2 text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl overflow-hidden transition-all duration-300">
          <div className="flex flex-col px-8 py-6 gap-2 font-h1">
            {navItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`}
                className={getMobileLinkClasses(item.id)}
                onClick={(e) => handleNavClick(e, `#${item.id}`)}
              >
                {item.label}
              </a>
            ))}
            
            <div className="pt-6 mt-4 border-t border-slate-800/50 flex flex-col sm:hidden gap-4">
              <button className="active:scale-95 transition-transform bg-primary-container text-on-primary-container px-6 py-3 rounded-lg font-bold hover:brightness-110 w-full text-center">
                CV
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
