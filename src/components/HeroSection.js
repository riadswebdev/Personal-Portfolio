import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-[819px] flex flex-col md:flex-row items-center justify-between py-section-gap gap-stack-lg relative" id="home">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-container/10 blur-[120px] -z-10 rounded-full"></div>
      
      <div className="flex-1 space-y-stack-md text-center md:text-left">
        <p className="font-label-caps text-label-caps text-primary-container uppercase">Frontend Architect</p>
        <h1 className="font-h1 text-h1 text-on-surface max-w-2xl">
          Building the Future of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-tertiary-container">Web</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
          I craft high-performance, accessible, and visually stunning digital experiences using modern frontend technologies and human-centered design principles.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-stack-md justify-center md:justify-start">
          <button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-lg font-bold text-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all">
            Download Resume
          </button>
          <div className="flex gap-4">
            <a className="w-12 h-12 flex items-center justify-center rounded-full glass-card hover:text-primary-container transition-colors" href="#">
              <span className="material-symbols-outlined">code</span>
            </a>
            <a className="w-12 h-12 flex items-center justify-center rounded-full glass-card hover:text-primary-container transition-colors" href="#">
              <span className="material-symbols-outlined">hub</span>
            </a>
            <a className="w-12 h-12 flex items-center justify-center rounded-full glass-card hover:text-primary-container transition-colors" href="#">
              <span className="material-symbols-outlined">share</span>
            </a>
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-center md:justify-end relative">
        <div className="relative w-80 h-80 md:w-96 md:h-96">
          <div className="absolute inset-0 rounded-3xl border-2 border-primary-container/30 rotate-6 -z-10"></div>
          <div className="absolute inset-0 rounded-3xl border-2 border-tertiary-container/20 -rotate-3 -z-10"></div>
          <div className="w-full h-full object-cover rounded-3xl shadow-2xl glass-card p-2 overflow-hidden relative">
            <Image 
              src="https://i.ibb.co.com/5X4sD47X/riad.png" 
              alt="Professional profile" 
              fill
              className="object-cover drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
