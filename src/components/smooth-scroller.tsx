"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Initialize ScrollSmoother once on the client. Wraps the site's main content
// to provide smooth scrolling and allows ScrollTrigger to work with the smoother.
export default function SmoothScroller({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;

    // Create the smoother using the explicit wrapper/content nodes so we
    // don't accidentally modify document.body (which can disable scroll).
    const smoother = ScrollSmoother.create({
      wrapper: wrapper,
      content: content,
      smooth: 1,
      effects: true,
    });

    return () => {
      try {
        smoother && smoother.kill();
      } catch (e) {
        // ignore cleanup errors
      }
    };
  }, []);

  // Render wrapper/content pair that ScrollSmoother expects.
  return (
    <div ref={wrapperRef} className="smooth-wrapper">
      <div ref={contentRef} className="smooth-content">
        {children}
      </div>
    </div>
  );
}
