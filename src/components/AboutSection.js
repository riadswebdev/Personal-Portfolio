"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const container = useRef(null);

  useGSAP(() => {
    // Title animation
    gsap.from(".section-title", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Fade-in from left for text
    gsap.from(".about-text", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Fade-in from right for stats grid
    gsap.from(".about-stats > div", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      x: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out"
    });

    // GSAP Counter animation
    gsap.utils.toArray(".stat-number").forEach(el => {
      const target = parseInt(el.getAttribute("data-target"));
      if (!isNaN(target)) {
        gsap.to(el, {
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
          },
          innerHTML: target,
          duration: 2,
          snap: { innerHTML: 1 },
          ease: "power2.out"
        });
      }
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-section-gap grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start overflow-hidden" id="about">
      <div className="about-text space-y-8">
        <div>
          <h2 className="section-title font-h2 text-h2 mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 pb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary-container rounded-full mb-6"></div>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-6">
            I'm a passionate Frontend Developer focused on building modern, responsive, and user-friendly web applications.
          </p>
          <ul className="space-y-4 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-primary-container mt-1">⚡</span>
              <span><strong>Performance & Scalability:</strong> Optimizing code for lightning-fast load times.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-container mt-1">🎨</span>
              <span><strong>Clean UI Design:</strong> Turning complex ideas into intuitive, pixel-perfect interfaces.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-container mt-1">✨</span>
              <span><strong>Smooth Animations:</strong> Creating engaging user experiences with modern motion libraries.</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-on-surface mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary-container">local_fire_department</span>
            Current Activities
          </h3>
          <ul className="space-y-3 text-on-surface-variant">
            <li className="flex gap-3 items-start">
              <span className="text-xl leading-none">🔭</span>
              <span>Working on a <strong>Tourism Booking Website</strong> with Next.js</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-xl leading-none">🌱</span>
              <span>Exploring <strong>GSAP & Framer Motion</strong> for advanced animations</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-xl leading-none">🤝</span>
              <span>Looking to collaborate on open-source React/Next.js projects</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="flex flex-col gap-8">
        <div className="about-stats grid grid-cols-2 gap-gutter">
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center">
            <span className="text-4xl font-bold text-primary-container mb-2"><span className="stat-number" data-target="5">0</span>+</span>
            <p className="text-on-surface-variant font-label-caps text-xs">Projects Built</p>
          </div>
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center">
            <span className="text-4xl font-bold text-tertiary-container mb-2"><span className="stat-number" data-target="1">0</span>+</span>
            <p className="text-on-surface-variant font-label-caps text-xs">Year Learning</p>
          </div>
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center">
            <span className="text-4xl font-bold text-primary-container mb-2"><span className="stat-number" data-target="100">0</span>%</span>
            <p className="text-on-surface-variant font-label-caps text-xs">Commitment</p>
          </div>
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center">
            <span className="text-4xl font-bold text-tertiary-container mb-2"><span className="stat-number" data-target="100">0</span>+</span>
            <p className="text-on-surface-variant font-label-caps text-xs">GitHub Commits</p>
          </div>
        </div>

        {/* GitHub Stats */}
        <div className="glass-card rounded-2xl p-6 overflow-hidden about-stats">
          <h3 className="text-lg font-bold text-on-surface mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary-container">monitoring</span>
            GitHub Stats
          </h3>
          <div className="flex flex-col gap-4">
            <img 
              src="https://streak-stats.demolab.com?user=riadswebdev&theme=dracula&hide_border=true&background=transparent" 
              alt="GitHub Streak" 
              className="w-full h-auto drop-shadow-lg"
            />
            <img 
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=riadswebdev&layout=compact&theme=dracula&hide_border=true&bg_color=00000000" 
              alt="Top Langs" 
              className="w-full h-auto drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
