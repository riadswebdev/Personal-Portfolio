"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";

const CYCLE_INTERVAL = 10; // seconds between theme changes
const TRANSITION_DURATION = 2.5; // seconds for smooth transition

// ── Theme Definitions ──
// Each theme overrides Tailwind v4 CSS custom properties + glass/glow vars
const themes = [
  {
    name: "Cyber Neon",
    icon: "electric_bolt",
    colors: {
      "--color-cyan-400": "#22d3ee",
      "--color-cyan-300": "#67e8f9",
      "--color-purple-500": "#a855f7",
      "--color-primary-container": "#00f0ff",
      "--color-on-primary-container": "#006970",
      "--color-tertiary-container": "#00f6bb",
      "--color-background": "#0b1326",
      "--color-surface": "#0b1326",
      "--color-surface-dim": "#0b1326",
      "--color-surface-container": "#171f33",
      "--color-surface-container-low": "#131b2e",
      "--color-surface-container-lowest": "#060e20",
      "--color-surface-container-high": "#222a3d",
      "--color-surface-container-highest": "#2d3449",
      "--color-surface-variant": "#2d3449",
      "--color-on-surface": "#dae2fd",
      "--color-on-surface-variant": "#b9cacb",
      "--color-secondary-container": "#7000ff",
      "--glass-bg": "rgba(23, 31, 51, 0.7)",
      "--glass-border": "rgba(0, 240, 255, 0.1)",
      "--glass-border-hover": "rgba(0, 240, 255, 0.4)",
      "--glass-glow": "rgba(0, 240, 255, 0.15)",
      "--ambient-1": "rgba(0, 240, 255, 0.04)",
      "--ambient-2": "rgba(168, 85, 247, 0.04)",
    },
  },
  {
    name: "Glass Premium",
    icon: "blur_on",
    colors: {
      "--color-cyan-400": "#a78bfa",
      "--color-cyan-300": "#c4b5fd",
      "--color-purple-500": "#3b82f6",
      "--color-primary-container": "#a78bfa",
      "--color-on-primary-container": "#3b0764",
      "--color-tertiary-container": "#60a5fa",
      "--color-background": "#070b18",
      "--color-surface": "#070b18",
      "--color-surface-dim": "#070b18",
      "--color-surface-container": "#111827",
      "--color-surface-container-low": "#0d1320",
      "--color-surface-container-lowest": "#050914",
      "--color-surface-container-high": "#1e2536",
      "--color-surface-container-highest": "#262d40",
      "--color-surface-variant": "#262d40",
      "--color-on-surface": "#e0e7ff",
      "--color-on-surface-variant": "#a5b4cb",
      "--color-secondary-container": "#4f46e5",
      "--glass-bg": "rgba(17, 24, 39, 0.8)",
      "--glass-border": "rgba(167, 139, 250, 0.12)",
      "--glass-border-hover": "rgba(167, 139, 250, 0.35)",
      "--glass-glow": "rgba(167, 139, 250, 0.12)",
      "--ambient-1": "rgba(167, 139, 250, 0.05)",
      "--ambient-2": "rgba(59, 130, 246, 0.04)",
    },
  },
  {
    name: "Minimal Pro",
    icon: "contrast",
    colors: {
      "--color-cyan-400": "#cbd5e1",
      "--color-cyan-300": "#e2e8f0",
      "--color-purple-500": "#94a3b8",
      "--color-primary-container": "#e2e8f0",
      "--color-on-primary-container": "#1e293b",
      "--color-tertiary-container": "#94a3b8",
      "--color-background": "#0c1017",
      "--color-surface": "#0c1017",
      "--color-surface-dim": "#0c1017",
      "--color-surface-container": "#161c26",
      "--color-surface-container-low": "#121820",
      "--color-surface-container-lowest": "#080c12",
      "--color-surface-container-high": "#1f2733",
      "--color-surface-container-highest": "#283040",
      "--color-surface-variant": "#283040",
      "--color-on-surface": "#f1f5f9",
      "--color-on-surface-variant": "#94a3b8",
      "--color-secondary-container": "#475569",
      "--glass-bg": "rgba(22, 28, 38, 0.6)",
      "--glass-border": "rgba(226, 232, 240, 0.06)",
      "--glass-border-hover": "rgba(226, 232, 240, 0.2)",
      "--glass-glow": "rgba(226, 232, 240, 0.06)",
      "--ambient-1": "rgba(226, 232, 240, 0.02)",
      "--ambient-2": "rgba(148, 163, 184, 0.02)",
    },
  },
  {
    name: "Creative Motion",
    icon: "palette",
    colors: {
      "--color-cyan-400": "#34d399",
      "--color-cyan-300": "#6ee7b7",
      "--color-purple-500": "#f472b6",
      "--color-primary-container": "#34d399",
      "--color-on-primary-container": "#064e3b",
      "--color-tertiary-container": "#f472b6",
      "--color-background": "#080d1a",
      "--color-surface": "#080d1a",
      "--color-surface-dim": "#080d1a",
      "--color-surface-container": "#121a2d",
      "--color-surface-container-low": "#0e1524",
      "--color-surface-container-lowest": "#060a16",
      "--color-surface-container-high": "#1c2540",
      "--color-surface-container-highest": "#252e45",
      "--color-surface-variant": "#252e45",
      "--color-on-surface": "#dcfce7",
      "--color-on-surface-variant": "#a7c4b8",
      "--color-secondary-container": "#db2777",
      "--glass-bg": "rgba(18, 26, 45, 0.7)",
      "--glass-border": "rgba(52, 211, 153, 0.1)",
      "--glass-border-hover": "rgba(52, 211, 153, 0.4)",
      "--glass-glow": "rgba(52, 211, 153, 0.15)",
      "--ambient-1": "rgba(52, 211, 153, 0.05)",
      "--ambient-2": "rgba(244, 114, 182, 0.04)",
    },
  },
];

// Separate color-only keys (hex values GSAP can interpolate)
// from non-color keys (rgba strings we handle separately)
const colorKeys = [
  "--color-cyan-400",
  "--color-cyan-300",
  "--color-purple-500",
  "--color-primary-container",
  "--color-on-primary-container",
  "--color-tertiary-container",
  "--color-background",
  "--color-surface",
  "--color-surface-dim",
  "--color-surface-container",
  "--color-surface-container-low",
  "--color-surface-container-lowest",
  "--color-surface-container-high",
  "--color-surface-container-highest",
  "--color-surface-variant",
  "--color-on-surface",
  "--color-on-surface-variant",
  "--color-secondary-container",
];

const rgbaKeys = [
  "--glass-bg",
  "--glass-border",
  "--glass-border-hover",
  "--glass-glow",
  "--ambient-1",
  "--ambient-2",
];

export default function ThemeEvolution() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const proxyRef = useRef({});
  const tweenRef = useRef(null);
  const intervalRef = useRef(null);
  const progressRef = useRef(null);

  // Apply CSS vars from the proxy to the document root
  const applyTheme = useCallback(() => {
    const root = document.documentElement;
    for (const key of colorKeys) {
      if (proxyRef.current[key]) {
        root.style.setProperty(key, proxyRef.current[key]);
      }
    }
    for (const key of rgbaKeys) {
      if (proxyRef.current[key]) {
        root.style.setProperty(key, proxyRef.current[key]);
      }
    }
  }, []);

  // Initialize the proxy with default theme colors
  useEffect(() => {
    const initial = themes[0].colors;
    proxyRef.current = { ...initial };
    applyTheme();
  }, [applyTheme]);

  // Transition to a specific theme index
  const transitionTo = useCallback(
    (nextIndex) => {
      if (tweenRef.current) tweenRef.current.kill();

      const target = {};
      // Only interpolate hex color keys via GSAP (it handles color interpolation)
      for (const key of colorKeys) {
        target[key] = themes[nextIndex].colors[key];
      }

      tweenRef.current = gsap.to(proxyRef.current, {
        ...target,
        duration: TRANSITION_DURATION,
        ease: "power2.inOut",
        onUpdate: () => {
          applyTheme();
        },
        onComplete: () => {
          // After GSAP finishes hex interpolation, snap rgba values
          for (const key of rgbaKeys) {
            proxyRef.current[key] = themes[nextIndex].colors[key];
          }
          applyTheme();
        },
      });

      // Crossfade rgba values using a separate opacity tween
      const rgbaProxy = { t: 0 };
      const fromRgba = {};
      const toRgba = {};
      for (const key of rgbaKeys) {
        fromRgba[key] = proxyRef.current[key];
        toRgba[key] = themes[nextIndex].colors[key];
      }

      gsap.to(rgbaProxy, {
        t: 1,
        duration: TRANSITION_DURATION,
        ease: "power2.inOut",
        onUpdate: () => {
          // For rgba keys, do a simple crossfade by snapping at midpoint
          if (rgbaProxy.t > 0.5) {
            for (const key of rgbaKeys) {
              proxyRef.current[key] = toRgba[key];
            }
          }
        },
      });

      setCurrentIndex(nextIndex);
    },
    [applyTheme]
  );

  // Auto-cycle timer
  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % themes.length;
        transitionTo(next);
        return next;
      });
    }, CYCLE_INTERVAL * 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, transitionTo]);

  // Progress bar animation
  useEffect(() => {
    if (!progressRef.current || isPaused) return;

    gsap.killTweensOf(progressRef.current);
    gsap.fromTo(
      progressRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: CYCLE_INTERVAL,
        ease: "none",
        repeat: -1,
      }
    );

    return () => {
      if (progressRef.current) gsap.killTweensOf(progressRef.current);
    };
  }, [currentIndex, isPaused]);

  const handleThemeClick = (index) => {
    if (index === currentIndex) return;
    transitionTo(index);
    // Reset the interval
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          const next = (prev + 1) % themes.length;
          transitionTo(next);
          return next;
        });
      }, CYCLE_INTERVAL * 1000);
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-50 flex items-end gap-3">
      {/* Theme Indicator Pill */}
      <div
        className="group relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Expanded theme selector (shown on hover) */}
        <div className="absolute bottom-full left-0 mb-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <div
            className="flex flex-col gap-1.5 p-2 rounded-xl border backdrop-blur-xl shadow-2xl"
            style={{
              background: "var(--glass-bg, rgba(23,31,51,0.9))",
              borderColor: "var(--glass-border, rgba(0,240,255,0.1))",
            }}
          >
            {themes.map((theme, i) => (
              <button
                key={theme.name}
                onClick={() => handleThemeClick(i)}
                className={`flex items-center gap-2.5 px-3.5 py-2 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                  i === currentIndex
                    ? "text-on-primary-container font-bold"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
                style={{
                  background:
                    i === currentIndex
                      ? "var(--color-primary-container, #00f0ff)"
                      : "transparent",
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "16px" }}
                >
                  {theme.icon}
                </span>
                {theme.name}
              </button>
            ))}

            {/* Pause indicator */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 text-[10px] text-on-surface-variant border-t border-white/5 mt-1 pt-2">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "12px" }}
              >
                pause_circle
              </span>
              Paused while hovering
            </div>
          </div>
        </div>

        {/* Compact pill (always visible) */}
        <button
          className="flex items-center gap-2 px-3 py-2 rounded-full border backdrop-blur-xl shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 relative overflow-hidden"
          style={{
            background: "var(--glass-bg, rgba(23,31,51,0.9))",
            borderColor: "var(--glass-border-hover, rgba(0,240,255,0.3))",
          }}
          aria-label="Theme Evolution"
        >
          {/* Progress bar */}
          <div
            ref={progressRef}
            className="absolute bottom-0 left-0 h-[2px] origin-left"
            style={{
              background:
                "var(--color-primary-container, #00f0ff)",
              width: "100%",
            }}
          />

          <span
            className="material-symbols-outlined text-on-surface"
            style={{
              fontSize: "14px",
              color: "var(--color-primary-container, #00f0ff)",
            }}
          >
            {themes[currentIndex].icon}
          </span>
          <span
            className="text-[11px] font-bold tracking-wide"
            style={{ color: "var(--color-on-surface, #dae2fd)" }}
          >
            {themes[currentIndex].name}
          </span>
        </button>
      </div>
    </div>
  );
}
