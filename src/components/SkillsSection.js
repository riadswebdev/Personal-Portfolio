"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SkillsSection() {
  const container = useRef(null);

  // strokeDasharray = 2πr = 2 * π * 40 ≈ 251.2
  // strokeDashoffset = 251.2 * (1 - percentage/100)
  const skills = [
    {
      name: "HTML & CSS",
      percentage: 95,
      offset: Math.round(251.2 * (1 - 0.95)),
    },
    {
      name: "JavaScript",
      percentage: 88,
      offset: Math.round(251.2 * (1 - 0.88)),
    },
    {
      name: "React.js",
      percentage: 83,
      offset: Math.round(251.2 * (1 - 0.83)),
    },
    { name: "Next.js", percentage: 80, offset: Math.round(251.2 * (1 - 0.8)) },
    {
      name: "Tailwind CSS",
      percentage: 92,
      offset: Math.round(251.2 * (1 - 0.92)),
    },
    {
      name: "Git & GitHub",
      percentage: 85,
      offset: Math.round(251.2 * (1 - 0.85)),
    },
  ];

  const techIcons = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Tailwind CSS", icon: "🌊" },
    { name: "JavaScript", icon: "💛" },
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "GSAP", icon: "🟢" },
    { name: "Figma", icon: "✨" },
    { name: "Git", icon: "📦" },
  ];

  useGSAP(
    () => {
      // Title animation
      gsap.from(".section-title", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.fromTo(
        ".skill-card",
        { opacity: 0, scale: 0.8 },
        {
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
          },
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
      );

      gsap.fromTo(
        ".skill-ring",
        { strokeDashoffset: 251.2 },
        {
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
          },
          strokeDashoffset: (index) => skills[index].offset,
          duration: 1.6,
          ease: "power2.out",
          delay: 0.3,
        },
      );
    },
    { scope: container, dependencies: [] },
  );

  return (
    <section ref={container} className="py-section-gap" id="skills">
      <div className="text-center mb-stack-lg space-y-4">
        <h2 className="section-title font-h2 text-h2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 pb-2">
          Technical Expertise
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">
          Core technologies I use daily to build fast, responsive, and beautiful
          web experiences.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8 mb-16">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card glass-card p-6 rounded-2xl flex flex-col items-center gap-4 group transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(0,240,255,0.15)]"
          >
            {/* Circular ring */}
            <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
              <svg
                className="w-full h-full transform -rotate-90"
                viewBox="0 0 96 96"
              >
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Track */}
                {/* Background Track */}
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="6"
                  className="text-surface-container-highest"
                />

                {/* Animated Progress Ring */}
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray="251.2"
                  style={{ strokeDashoffset: 251.2 }}
                  filter="url(#glow)"
                  className="text-primary-container skill-ring"
                />
              </svg>
              <span className="absolute text-sm md:text-lg font-bold">
                {skill.percentage}%
              </span>
            </div>

            {/* Label */}
            <div className="flex items-center gap-2 text-center">
              <div className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_rgba(0,240,255,1)] shrink-0" />
              <span className="font-bold text-xs leading-tight">
                {skill.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Marquee Row */}
      <div className="relative w-full overflow-hidden py-4 border-y border-white/5 bg-surface-container-lowest/50">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee gap-8 items-center">
          {[...techIcons, ...techIcons].map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-3 glass-card px-6 py-3 rounded-full whitespace-nowrap cursor-pointer hover:scale-105 transition-transform"
            >
              <span className="text-xl">{tech.icon}</span>
              <span className="font-label-caps text-sm text-on-surface-variant group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
