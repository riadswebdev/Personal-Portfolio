'use client';

import dynamic from 'next/dynamic';

// typewriter-effect uses browser APIs — load it client-side only
const Typewriter = dynamic(() => import('typewriter-effect'), { ssr: false });

export default function TypewriterBanner() {
  return (
    <div className="flex items-center gap-2 font-h2 text-h2 text-on-surface">
      <span className="text-on-surface-variant font-medium">I&apos;m a&nbsp;</span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-tertiary-container font-bold">
        <Typewriter
          options={{
            strings: [
              'Web Developer',
              'Full Stack Developer',
              'React Specialist',
              'Next.js Engineer',
              'UI/UX Enthusiast',
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
