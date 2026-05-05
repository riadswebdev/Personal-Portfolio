"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { 
  FaCode, 
  FaServer, 
  FaTools, 
  FaShieldAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaNpm,
  FaDatabase,
  FaFire,
  FaCloud,
  FaTerminal
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTailwindcss
} from "react-icons/si";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function DetailedSkillsSection() {
  const container = useRef(null);

  const skillGroups = [
    {
      title: "Frontend Development",
      icon: <FaCode />,
      skills: [
        { name: "HTML5",       icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: "CSS3",        icon: <FaCss3Alt className="text-[#1572B6]" /> },
        { name: "JavaScript",  icon: <FaJsSquare className="text-[#F7DF1E]" /> },
        { name: "React",       icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "Next.js",     icon: <SiNextdotjs className="text-white" /> },
        { name: "Tailwind CSS",icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: "DaisyUI",     icon: <FaCss3Alt className="text-[#5A0EF8]" /> },
      ],
    },
    {
      title: "Database & Auth",
      icon: <FaDatabase />,
      skills: [
        { name: "MongoDB",     icon: <FaDatabase className="text-[#47A248]" /> },
        { name: "Better Auth", icon: <FaShieldAlt className="text-purple-400" /> },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <FaTools />,
      skills: [
        { name: "VS Code",  icon: <FaCode className="text-[#007ACC]" /> },
        { name: "Git",      icon: <FaGitAlt className="text-[#F05032]" /> },
        { name: "GitHub",   icon: <FaGithub className="text-white" /> },
        { name: "NPM",      icon: <FaNpm className="text-[#CB3837]" /> },
        { name: "Vercel",   icon: <FaCloud className="text-white" /> },
      ],
    },
  ];


  useGSAP(() => {
    // Animate Cards
    gsap.from(".glass-card", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      },
      y: 30,
      // opacity: 0,
      stagger: 0.15,
      duration: 0.6,
      ease: "power2.out",
    });

    // Animate Pills within cards
    gsap.from(".skill-pill", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      y: 15,
      // opacity: 0,
      scale: 0.95,
      stagger: 0.03,
      duration: 0.4,
      ease: "power2.out",
      delay: 0.2,
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 px-4 sm:px-6" id="detailed-skills">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Technical <span className="text-primary">Skills</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          A comprehensive overview of my technical stack and the tools I leverage to build scalable, high-performance applications.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap gap-8 max-w-7xl mx-auto">
        {skillGroups.map((group, i) => (
          <div
            key={i}
            className="glass-card flex flex-col p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl hover:border-white/20 transition-colors duration-300 w-full lg:w-[calc(33.333%-22px)]"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-primary/10 text-primary text-2xl">
                {group.icon}
              </div>
              <h3 className="text-xl font-bold tracking-tight">{group.title}</h3>
            </div>

            <div className="flex flex-wrap gap-3 mt-auto">
              {group.skills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-pill flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 cursor-default"
                >
                  <span className="text-lg opacity-90">{skill.icon}</span>
                  <span className="text-gray-200">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
