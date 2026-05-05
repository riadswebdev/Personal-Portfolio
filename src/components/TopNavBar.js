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
    const sections = ["home", "about", "skills", "detailed-skills", "qualifications", "projects", "contact"];
    
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

  const isItemActive = (item) => {
    return activeSection === item.id || (item.subItems && item.subItems.some(sub => sub.id === activeSection));
  };

  const getDesktopLinkClasses = (item) => {
    const isActive = isItemActive(item);
    return `inline-flex items-center transition-all duration-300 border-b-2 ${
      isActive 
        ? "text-cyan-400 border-cyan-400 pb-1 font-bold" 
        : "text-slate-400 border-transparent font-medium hover:text-cyan-300 hover:border-cyan-300/30 hover:drop-shadow-[0_0_5px_rgba(0,240,255,0.4)] pb-1"
    }`;
  };

  const getMobileLinkClasses = (item) => {
    const isActive = isItemActive(item);
    return `w-full inline-flex items-center transition-all duration-300 ${
      isActive 
        ? "text-cyan-400 font-bold border-l-4 border-cyan-400 pl-4 py-2 bg-cyan-400/10 -ml-4" 
        : "text-slate-400 font-medium hover:text-cyan-300 py-2"
    }`;
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { 
      id: "skills", 
      label: "Skills",
      subItems: [
        { id: "detailed-skills", label: "General Skills" },
        { id: "qualifications", label: "Qualifications" }
      ]
    },
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
            item.subItems ? (
              <div key={item.id} className="relative group">
                <a 
                  href={`#${item.id}`}
                  className={getDesktopLinkClasses(item)}
                  onClick={(e) => handleNavClick(e, `#${item.id}`)}
                >
                  {item.label}
                  <span className="material-symbols-outlined text-[18px] ml-1 transition-transform duration-300 group-hover:rotate-180">expand_more</span>
                </a>
                
                {/* Desktop Dropdown Menu */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden before:absolute before:-top-4 before:left-0 before:w-full before:h-4">
                  {item.subItems.map(subItem => (
                    <a 
                      key={subItem.id} 
                      href={`#${subItem.id}`}
                      className={`px-4 py-3 text-sm transition-colors ${
                        activeSection === subItem.id 
                          ? "text-cyan-400 bg-slate-800/80 font-bold" 
                          : "text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50"
                      }`}
                      onClick={(e) => handleNavClick(e, `#${subItem.id}`)}
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a 
                key={item.id}
                href={`#${item.id}`}
                className={getDesktopLinkClasses(item)}
                onClick={(e) => handleNavClick(e, `#${item.id}`)}
              >
                {item.label}
              </a>
            )
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <a
            href="/cv.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block active:scale-95 transition-transform bg-primary-container text-lg text-on-primary-container px-5 py-2 rounded-lg font-bold hover:brightness-110"
          >
            CV
          </a>
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
              <div key={item.id} className="flex flex-col w-full">
                <a 
                  href={`#${item.id}`}
                  className={getMobileLinkClasses(item)}
                  onClick={(e) => handleNavClick(e, `#${item.id}`)}
                >
                  {item.label}
                  {item.subItems && (
                    <span className="material-symbols-outlined ml-auto text-[20px]">expand_more</span>
                  )}
                </a>
                
                {/* Mobile Sub-items */}
                {item.subItems && (
                  <div className="flex flex-col pl-6 border-l border-slate-800 ml-4 mt-2 mb-4 gap-1">
                    {item.subItems.map(subItem => (
                      <a 
                        key={subItem.id}
                        href={`#${subItem.id}`}
                        className={`py-2 px-3 rounded-lg text-sm transition-colors ${
                          activeSection === subItem.id 
                            ? "text-cyan-400 font-bold bg-cyan-400/10" 
                            : "text-slate-400 font-medium hover:text-cyan-300"
                        }`}
                        onClick={(e) => handleNavClick(e, `#${subItem.id}`)}
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-6 mt-4 border-t border-slate-800/50 flex flex-col sm:hidden gap-4">
              <a
                href="/cv.html"
                target="_blank"
                rel="noopener noreferrer"
                className="active:scale-95 transition-transform bg-primary-container text-on-primary-container px-6 py-3 rounded-lg font-bold hover:brightness-110 w-full text-center block"
              >
                CV
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
