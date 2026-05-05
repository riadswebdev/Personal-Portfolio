"use client";

import dynamic from "next/dynamic";

// typewriter-effect uses browser APIs — load it client-side only
const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

export default function TypewriterBanner() {
  return (
    <div className="flex items-center gap-2 font-h2 text-h2 text-on-surface">
      <span className="text-on-surface-variant font-medium text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl">
        I&apos;m
      </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-tertiary-container text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold">
        <Typewriter
          options={{
            strings: [
              "Muhammad Riad Shekh",
              "Programmer",
              "Web Developer",
              "Full Stack Developer",
              "React Specialist",
              "Next.js Engineer",
              "UI/UX Enthusiast",
            ],
            autoStart: true,
            loop: true,
            delay: 60,
            deleteSpeed: 40,
          }}
        />
      </span>
    </div>
  );
}
