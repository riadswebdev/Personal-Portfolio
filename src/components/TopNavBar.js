import Image from "next/image";


export default function TopNavBar() {
  return (
    <nav className="sticky top-0 w-full z-50 bg-slate-950/70 backdrop-blur-xl border-b border-cyan-400/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className="flex justify-between items-center h-20 px-8 max-w-[1280px] mx-auto font-h1 antialiased tracking-tight">
        <div className="text-2xl font-bold  ">
         <Image
          src="https://i.ibb.co.com/xt1Q7VQz/Designer-1.png"
          alt="Logo"
            width={100}
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            height={100}
            className="object-cover w-20 sm:w-25 "
         /> 
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-cyan-400 border-b-2 border-cyan-400 pb-1 font-bold transition-all duration-300" href="#home">Home</a>
          <a className="text-slate-400 font-medium hover:text-cyan-300 hover:drop-shadow-[0_0_5px_rgba(0,240,255,0.4)] transition-all duration-300" href="#about">About</a>
          <a className="text-slate-400 font-medium hover:text-cyan-300 hover:drop-shadow-[0_0_5px_rgba(0,240,255,0.4)] transition-all duration-300" href="#skills">Skills</a>
          <a className="text-slate-400 font-medium hover:text-cyan-300 hover:drop-shadow-[0_0_5px_rgba(0,240,255,0.4)] transition-all duration-300" href="#projects">Projects</a>
          <a className="text-slate-400 font-medium hover:text-cyan-300 hover:drop-shadow-[0_0_5px_rgba(0,240,255,0.4)] transition-all duration-300" href="#contact">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="active:scale-95 transition-transform bg-primary-container text-on-primary-container px-6 py-2 rounded-lg font-bold hover:brightness-110">
            Resume
          </button>
          <span className="material-symbols-outlined text-cyan-400 cursor-pointer hover:rotate-12 transition-transform">terminal</span>
        </div>
      </div>
    </nav>
  );
}
