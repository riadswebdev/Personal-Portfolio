"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProjectModal from "./ProjectModal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectsSection() {
  const container = useRef(null);
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    {
      title: "Online Book Borrowing Platform",
      description: "A full-featured digital library platform with AI-powered book recommendations, reading progress tracking, and wishlist management.",
      image: "https://i.ibb.co.com/r2n7ZZkd/Screenshot-2026-04-29-195442.png",
      tags: ["Next.js", "Tailwind CSS", "DaisyUI", "BetterAuth"],
      features: [
        "Book browsing with detailed views",
        "Read / Wishlist management",
        "Reading progress tracking",
        "AI-powered recommendations",
        "Responsive design",
      ],
      live: "https://online-book-borrowing-platform-delta.vercel.app",
      github: "https://github.com/djriad157764-creator",
      alt: "Online Book Borrowing Platform"
    },
    {
      title: "Personal Portfolio",
      description: "A modern developer portfolio built with Next.js featuring GSAP scroll animations, glassmorphism design, and a typewriter hero section.",
      image: "https://i.ibb.co.com/20dwKB91/Screenshot-2026-04-29-174736.png",
      tags: ["Next.js", "GSAP", "Tailwind CSS", "Framer Motion"],
      features: [
        "Animated hero with typewriter effect",
        "GSAP scroll-triggered animations",
        "Glassmorphism UI design",
        "Fully responsive layout",
        "Contact form integration",
      ],
      live: "https://djriad157764-creator.github.io",
      github: "https://github.com/djriad157764-creator/Personal-Portfolio",
      alt: "Personal Portfolio"
    },
    {
      title: "Frontend Learning Journey",
      description: "A showcase of projects and assignments completed on Programming Hero — covering HTML, CSS, JavaScript, React, and Next.js fundamentals.",
      image: "https://i.ibb.co.com/KzzprSCw/Screenshot-2026-04-29-200606.png",
      tags: ["React", "JavaScript", "CSS", "HTML"],
      features: [
        "HTML & CSS fundamentals",
        "JavaScript ES6+ projects",
        "React component exercises",
        "Responsive layouts",
        "Problem-solving challenges",
      ],
      live: "#",
      github: "https://github.com/djriad157764-creator",
      alt: "Programming Hero Learning Projects"
    }
  ];

  const filteredProjects = projects.filter(project => {
    if (filter === "All") return true;
    return project.tags.includes(filter);
  });

  useGSAP(() => {
    // Stagger reveal animation for project cards
    gsap.from(".project-card", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      y: 50,
      scale: 0.9,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out"
    });
  }, { scope: container });

  const handleMouseEnter = (e) => {
    const img = e.currentTarget.querySelector('.project-img');
    const overlay = e.currentTarget.querySelector('.project-overlay');
    
    gsap.to(img, { scale: 1.1, duration: 0.5, ease: "power2.out" });
    gsap.to(overlay, { opacity: 0.8, duration: 0.5, ease: "power2.out" });
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    gsap.to(card, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      ease: "power2.out",
      duration: 0.5
    });
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    const img = card.querySelector('.project-img');
    const overlay = card.querySelector('.project-overlay');
    
    gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5, ease: "power2.out" });
    gsap.to(img, { scale: 1, duration: 0.5, ease: "power2.out" });
    gsap.to(overlay, { opacity: 0.6, duration: 0.5, ease: "power2.out" });
  };

  return (
    <section ref={container} className="py-section-gap overflow-hidden" id="projects">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-stack-lg gap-6">
        <div className="space-y-2">
          <h2 className="font-h2 text-h2">Selected <span className="text-primary-container">Works</span></h2>
          <p className="text-on-surface-variant">A curated gallery of recent technical achievements.</p>
        </div>
        
        <div className="flex flex-wrap gap-2 bg-surface-variant/30 p-1.5 rounded-xl backdrop-blur-sm border border-white/5">
          {["All", "Next.js", "React"].map((item) => (
            <button 
              key={item}
              onClick={() => setFilter(item)}
              className={`px-5 py-2 rounded-lg font-label-caps text-sm transition-all duration-300 ${
                filter === item 
                  ? "bg-primary-container text-on-primary-container shadow-lg shadow-primary-container/20" 
                  : "text-on-surface-variant hover:text-white hover:bg-white/5"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row md:flex-wrap gap-6" style={{ perspective: "1000px" }}>
        {filteredProjects.map((project) => (
          <div 
            key={project.title} 
            className="project-card glass-card rounded-2xl overflow-hidden flex flex-col cursor-pointer w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => setSelectedProject(project)}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative h-64 overflow-hidden shrink-0">
              <Image 
                src={project.image} 
                alt={project.alt}
                fill
                className="project-img object-cover origin-center"
                unoptimized
              />
              <div className="project-overlay absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 pr-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-surface-variant/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold border border-white/10 z-10">{tag}</span>
                ))}
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col z-10">
              <h3 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-on-surface-variant text-sm mb-4">{project.description}</p>
              {project.features && (
                <ul className="text-xs text-on-surface-variant space-y-1 mb-6 flex-1">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-container inline-block shrink-0"></span>
                      {f}
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-lg bg-primary-container text-on-primary-container text-sm font-bold text-center hover:opacity-90 transition-all"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-lg border border-primary-container/30 text-primary-container text-sm font-bold text-center hover:bg-primary-container hover:text-on-primary-container transition-all"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Render Modal conditionally */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}


// https://i.ibb.co.com/ZR8pqy7v/Screenshot-2026-04-29-200417.png
// https://i.ibb.co.com/nNY6mVrh/Screenshot-2026-04-29-200312.png
// https://i.ibb.co.com/r2n7ZZkd/Screenshot-2026-04-29-195442.png
// https://i.ibb.co.com/20dwKB91/Screenshot-2026-04-29-174736.png
// https://i.ibb.co.com/KzzprSCw/Screenshot-2026-04-29-200606.png