"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function DetailedSkillsSection() {
  const container = useRef(null);
  const skills = [
    "HTML5", "CSS3", "JavaScript (ES6)", "DOM", 
    "DaisyUI", "HeroUI", "Tailwind CSS", "React.js", "Next.js"
  ];

  useGSAP(() => {
    gsap.from(".skill-pill", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      },
      y: 20,
      // opacity: 0,
      scale: 0.9,
      stagger: 0.1,
      duration: 0.6,
      ease: "back.out(1.5)"
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-section-gap" id="detailed-skills">
      <div className="text-center mb-stack-lg space-y-4">
        <h2 className="font-h2 text-h2">General <span className="text-primary-container">Skills</span></h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">A comprehensive look at the technologies and frameworks I use daily.</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="skill-pill glass-card px-6 py-3 rounded-full border border-primary-container/20 text-on-surface font-medium hover:bg-primary-container/10 hover:border-primary-container/60 hover:-translate-y-1 transition-all cursor-default shadow-lg"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
