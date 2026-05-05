"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    // Disable on touch devices (mobile/tablet)
    if (window.matchMedia("(hover: none)").matches) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    // Fix centering: GSAP x/y overwrites CSS transforms, so we must set it via GSAP
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    // Use GSAP quickTo for highly performant animations (bypasses normal string parsing)
    const xToCursor = gsap.quickTo(cursor, "x", { duration: 0, ease: "none" });
    const yToCursor = gsap.quickTo(cursor, "y", { duration: 0, ease: "none" });

    const xToFollower = gsap.quickTo(follower, "x", {
      duration: 0.15,
      ease: "power3.out",
    });
    const yToFollower = gsap.quickTo(follower, "y", {
      duration: 0.15,
      ease: "power3.out",
    });

    const moveCursor = (e) => {
      xToCursor(e.clientX);
      yToCursor(e.clientY);
      xToFollower(e.clientX);
      yToFollower(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    // Hover state for links and buttons
    const handleHover = () => {
      gsap.to(cursor, {
        scale: 1.5,
        backgroundColor: "#00f0ff",
        duration: 0.2,
      });
      gsap.to(follower, { scale: 0.5, opacity: 0, duration: 0.2 });
    };
    const handleLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "transparent",
        duration: 0.2,
      });
      gsap.to(follower, { scale: 1, opacity: 1, duration: 0.2 });
    };

    // Attach event listeners to all interactive elements
    const attachHoverEvents = () => {
      document.querySelectorAll("a, button, input, textarea").forEach((el) => {
        el.addEventListener("mouseenter", handleHover);
        el.addEventListener("mouseleave", handleLeave);
      });
    };

    // Initial attachment
    attachHoverEvents();

    // Re-attach if DOM changes (optional, using MutationObserver if needed, but keeping it minimal)
    const observer = new MutationObserver(() => attachHoverEvents());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
      document.querySelectorAll("a, button, input, textarea").forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 border border-primary-container rounded-full pointer-events-none z-[9999] hidden md:block"
      ></div>
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-primary-container/40 bg-primary-container/10 rounded-full pointer-events-none z-[9998] hidden md:block backdrop-blur-[2px] flex items-center justify-center"
      >
        <div className="absolute w-1 h-1 bg-blue-600 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-primary-container"></div>
      </div>
    </>
  );
}
