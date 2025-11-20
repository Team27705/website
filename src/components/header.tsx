"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { getLogoSrc } from "./get-logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { HamburgerIcon } from "lucide-react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Our Team",
    href: "/team",
    description: "Learn more about our team!",
  },
  {
    title: "Sponsors",
    href: "/sponsors",
    description: "Discover our sponsors",
  },
  {
    title: "Donate",
    href: "/donate",
    description: "Give us a hand to keep us going!",
  },
  {
    title: "FAQ",
    href: "/faq",
    description: "Frequently Asked Questions",
  },
];

export default function Header() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const el = ref.current;
    if (!el) return;

    // Find a trigger element. By default we look for `#hero`, but pages can
    // opt-in by adding `data-header-trigger` to their hero-like element.
    const triggerElement = document.querySelector<HTMLElement>(
      "[data-header-trigger], #hero",
    );

    // If there's no trigger on this page, keep the header visible and
    // do not register ScrollTrigger. This makes the header behavior opt-in.
    if (!triggerElement) {
      gsap.set(el, { yPercent: 0 });
      return;
    }

    // Start hidden (moved up by 100% of its own height)
    gsap.set(el, { yPercent: -100 });

    // Create a ScrollTrigger that toggles header visibility when the hero
    // section scrolls past the top of the viewport.
    const trigger = ScrollTrigger.create({
      trigger: triggerElement as any,
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

  return <DesktopHeader ref={ref} />;
}

const DesktopHeader = React.forwardRef<HTMLElement, {}>(
  function DesktopHeader(_, ref) {
    return (
      <header
        ref={ref}
        className="fixed z-50 flex max-h-32 w-full items-center justify-center bg-transparent p-4"
        aria-hidden={false}
      >
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="mr-3">
              <NavigationMenuLink
                href="/"
                className="bg-none! hover:bg-none! focus:bg-none! data-[active=focus]:hover:bg-none! data-[active=true]:hover:bg-none!"
              >
                <Image
                  src={getLogoSrc("into-the-deep", "lockup")}
                  alt="Logo"
                  width={200}
                  height={24}
                  className="h-24 w-auto"
                  loading="eager"
                />
              </NavigationMenuLink>
            </NavigationMenuItem>
            {components.map((component) => (
              <NavigationMenuItem key={component.title}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <NavigationMenuLink
                      href={component.href}
                      className="mt-10 block rounded-md p-3 leading-none text-yellow-400 no-underline transition-colors outline-none select-none hover:bg-gray-100 focus:bg-gray-100"
                    >
                      <div className="text-lg leading-none font-medium">
                        {component.title}
                      </div>
                    </NavigationMenuLink>
                  </TooltipTrigger>
                  <TooltipContent
                    className="max-w-xs text-center text-sm"
                    side="bottom"
                    sideOffset={4}
                  >
                    {component.description}
                  </TooltipContent>
                </Tooltip>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex flex-col gap-0 text-yellow-400"></div>
      </header>
    );
  },
);
