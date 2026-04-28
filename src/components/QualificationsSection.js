"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function QualificationsSection() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".qual-card", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      },
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out"
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-section-gap" id="qualifications">
      <div className="text-center mb-stack-lg space-y-4">
        <h2 className="font-h2 text-h2"><span className="text-primary-container">Qualifications</span></h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">My academic background and professional journey.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Education */}
        <div className="qual-card glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-primary-container/40 transition-colors">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary-container/5 blur-[60px] -z-10 rounded-full group-hover:bg-primary-container/10 transition-colors"></div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container border border-primary-container/20">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
            <h3 className="text-3xl font-h3 text-on-surface">Education</h3>
          </div>
          
          <div className="relative pl-8 border-l-2 border-primary-container/30 space-y-8 ml-3">
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-primary-container shadow-[0_0_15px_rgba(0,240,255,0.6)]"></div>
              <h4 className="text-xl font-bold text-on-surface mb-1">JSC</h4>
              <span className="inline-block px-3 py-1 bg-surface-variant/80 rounded-full text-xs font-label-caps text-primary-container border border-primary-container/20">2018</span>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="qual-card glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-tertiary-container/40 transition-colors">
          <div className="absolute top-0 right-0 w-48 h-48 bg-tertiary-container/5 blur-[60px] -z-10 rounded-full group-hover:bg-tertiary-container/10 transition-colors"></div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-full bg-tertiary-container/10 flex items-center justify-center text-tertiary-container border border-tertiary-container/20">
              <span className="material-symbols-outlined text-3xl">work</span>
            </div>
            <h3 className="text-3xl font-h3 text-on-surface">Experience</h3>
          </div>
          
          <div className="relative pl-8 border-l-2 border-tertiary-container/30 space-y-8 ml-3 min-h-[100px] flex items-center">
            <div className="relative w-full">
              <div className="absolute -left-[41px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-surface-variant border-2 border-tertiary-container/50"></div>
              <p className="text-on-surface-variant italic font-medium">Future updates coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
