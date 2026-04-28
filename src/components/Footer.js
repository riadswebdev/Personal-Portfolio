import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 w-full py-12 mt-section-gap">
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6 font-h1 text-sm tracking-wide">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className=""><Image
                    src="https://i.ibb.co.com/xt1Q7VQz/Designer-1.png"
                    alt="Logo"
                    width={100}
                      height={100}
                      className="bg-"
                   /> </span>
          <p className="text-slate-500">© 2024 DevArchitect. Built with precision.</p>
        </div>
        <div className="flex gap-8">
          <a className="text-slate-500 hover:text-cyan-400 transition-colors hover:translate-y-[-2px] transition-transform" href="[EMAIL_ADDRESS]">Email</a>
          <a className="text-slate-500 hover:text-cyan-400 transition-colors hover:translate-y-[-2px] transition-transform" href="#">Phone</a>
          <a className="text-slate-500 hover:text-cyan-400 transition-colors hover:translate-y-[-2px] transition-transform" href="#">Chat</a>
        </div>
        <div className="flex items-center gap-2 text-cyan-400">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
          <span className="font-bold">Verified Professional</span>
        </div>
      </div>
    </footer>
  );
}
