"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { getLogoSrc } from "./get-logo";

export default function Header() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const el = ref.current;
    if (!el) return;

    // Start hidden (moved up by 100% of its own height)
    gsap.set(el, { yPercent: -100 });

    // Create a ScrollTrigger that toggles header visibility when the hero
    // section scrolls past the top of the viewport.
    const trigger = ScrollTrigger.create({
      trigger: "#hero",
      start: "bottom top", // when hero bottom hits viewport top
      end: "bottom top",
      // When we enter (scrolling down past the hero), show the header
      onEnter: () => {
        gsap.to(el, { yPercent: 0, duration: 0.5, ease: "power2.out" });
      },
      // When we scroll back up into the hero, hide the header
      onLeaveBack: () => {
        gsap.to(el, { yPercent: -100, duration: 0.5, ease: "power2.in" });
      },
    });

    return () => {
      try {
        trigger && trigger.kill();
      } catch (e) {
        // ignore
      }
    };
  }, []);

  return (
    <header
      ref={ref}
      className="fixed z-50 flex max-h-[15%] w-full items-center justify-center bg-transparent p-4 text-white"
      aria-hidden={false}
    >
      <Image
        src={getLogoSrc("into-the-deep", "lockup")}
        alt="Logo"
        width={200}
        height={30}
        className="h-30 w-auto"
        loading="eager"
      />
      <div className="flex flex-col gap-0 text-yellow-400">
      </div>
    </header>
  );
}
