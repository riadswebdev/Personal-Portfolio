import Image from "next/image";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/riad-shekh",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/djriad157764-creator",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://x.com/md32316",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l11.733 16h4.267l-11.733-16z" />
        <path d="M4 20l6.768-6.768m2.46-2.46l6.772-6.772" />
      </svg>
    ),
  },
];

const navLinks = [
  { label: "Home",         href: "#home" },
  { label: "About",        href: "#about" },
  { label: "Skills",       href: "#skills" },
  { label: "Projects",     href: "#projects" },
  { label: "Qualifications", href: "#qualifications" },
  { label: "Contact",      href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="mt-section-gap relative w-full">
      {/* Wave SVG Animation */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-[99%]">
        <svg className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px] text-slate-950" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,121.3,201.3,114.63,242.42,110.74,282.88,96.53,321.39,56.44Z" className="fill-current opacity-80"></path>
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-current"></path>
        </svg>
      </div>

      <footer className="bg-slate-950 w-full pt-14 pb-8 relative z-10">
        <div className="max-w-[1280px] mx-auto px-8">

        {/* ── Top grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Image
              src="https://i.ibb.co.com/xt1Q7VQz/Designer-1.png"
              alt="Riad Shekh Logo"
              width={80}
              height={80}
            />
            <div>
              <p className="text-white font-bold text-lg tracking-wide">Md Riad Shekh</p>
              <p className="text-slate-400 text-xs tracking-widest uppercase mt-1">Frontend Web Developer</p>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Building responsive, high-performance web applications with clean UI design using React and Next.js.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-1">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all hover:scale-110"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick nav */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-5">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/40 group-hover:bg-cyan-400 transition-colors"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-5">Contact</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="mailto:mdriadshekh586@gmail.com"
                  className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors group"
                >
                  <span className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-700 group-hover:border-cyan-400 transition-colors text-base">✉</span>
                  <span className="text-sm">mdriadshekh586@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+0081314674108"
                  className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors group"
                >
                  <span className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-700 group-hover:border-cyan-400 transition-colors text-base">📞</span>
                  <span className="text-sm">+0081314674108</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/riad-shekh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors group"
                >
                  <span className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-700 group-hover:border-cyan-400 transition-colors text-base">in</span>
                  <span className="text-sm">linkedin.com/in/riad-shekh</span>
                </a>
              </li>
            </ul>

            <a
              href="/cv.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-lg bg-cyan-400 text-slate-950 text-sm font-bold hover:bg-cyan-300 transition-colors"
            >
              📄 Download CV
            </a>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-500 text-xs">
            © {year} <span className="text-slate-300 font-semibold">Md Riad Shekh</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-wide">
            <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            Verified Professional
          </div>
        </div>

      </div>
    </footer>
    </div>
  );
}
