import Image from "next/image";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Nexus Analytics",
      description: "Enterprise-grade data visualization platform with real-time stream processing.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsgfjwu2Q9kAZtzb0ixL_Lhm-IlQ_yWAdoFM2kpeaE2po6MpU3NXFSeJGdSmHrklV2Q6HrUA202vnm5SNzixhD-7gjfZKgEmhrcujkFhW82u_u7niLZ9qxQmir05nuJtE7I0j0eOqIFEmkvu-r_L_KSMGRuHaR35QoojC58HQswLNqpIdqsUnXqsza-uV8ZoSP1Vbn2Je0fo7QF70CjnKWmvQRxMj0A7pcEd9-HFYURI1wv1zq17rJGLbDbDsJRwMBoWCMoPr4Vg",
      tags: ["Next.js", "TypeScript"],
      alt: "SaaS Dashboard Project"
    },
    {
      title: "Aura Commerce",
      description: "High-conversion luxury lifestyle store with seamless animations and transitions.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDN8lYRtG_I7tcX2BU36QoO9tX3STC18VZWxXtC4ETJiBVXsHOaoEtPTo0vGnVHRBQphBsXVQCAz1P0L9hkMRumS5Oig0vFiT0ZB40RhmtVy8Sak362N3yskx07WH7POcCpn7ZXNpdrraZl0azfa084hdwmCEqaifnrk8VDInADacU4D8-HGh9_unDsrkympOnyN2SJVOzCwt6VnDx8MOopBRN9YdzACYhkp4Flqdt5iwDKjHDMb7d8xHiAsccPgsZhhRbXUCnltg",
      tags: ["React", "Tailwind"],
      alt: "E-commerce Experience"
    },
    {
      title: "Vortex Gallery",
      description: "Interactive 3D art exploration portal using advanced WebGL and GSAP animations.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtOAKv4MpuiWLVMbl0NgetTnsTrXIkaoNp2ygt-nDQFoReT94clW3FNR1zzrKi_0-VpqM9qQrD3tLsrkrb6yn_Y5-ib5IT9IYXQ7MMtJVqKSKYdmK2kIOgFLSF2RY6X7upV1wB7OLe7xwAMJHId4nqMEMLmQEcN-RTHCg6hRpBHVypLv0TpLPpk-lO0cHRNUt6ZxQ1UMOAB5W3VCqkHwlIjYB-EpMqcmHqxHDTtNqRihDgA6Y7Onj0YOHOGCG_tZL2FSe4uDKdbQ",
      tags: ["Three.js", "Shaders"],
      alt: "Art Gallery Platform"
    }
  ];

  return (
    <section className="py-section-gap" id="projects">
      <div className="flex justify-between items-end mb-stack-lg">
        <div className="space-y-2">
          <h2 className="font-h2 text-h2">Selected <span className="text-primary-container">Works</span></h2>
          <p className="text-on-surface-variant">A curated gallery of recent technical achievements.</p>
        </div>
        <button className="hidden md:block font-label-caps text-primary-container hover:underline tracking-widest">VIEW ALL PROJECTS</button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {projects.map((project, index) => (
          <div key={index} className="glass-card rounded-2xl overflow-hidden flex flex-col group">
            <div className="relative h-64 overflow-hidden">
              <Image 
                src={project.image} 
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 flex gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-surface-variant/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold border border-white/10">{tag}</span>
                ))}
              </div>
            </div>
            
            <div className="p-stack-md flex-1 flex flex-col">
              <h3 className="text-h3 font-h3 mb-2">{project.title}</h3>
              <p className="text-on-surface-variant text-sm flex-1 mb-4">{project.description}</p>
              <button className="w-full py-3 rounded-lg border border-primary-container/30 text-primary-container hover:bg-primary-container hover:text-on-primary-container transition-all flex items-center justify-center gap-2">
                View Case Study <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
