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
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";

/* Enable header scroll behavior:
  Add id="hero" or data-header-trigger to your hero element.
  For custom scrollers, pass `scroller` to `ScrollTrigger.create(...)`
  or use `ScrollTrigger.scrollerProxy(...)`. This isn't necessary for
  GSAP's scrolling wrapper as it does this automatically.
*/

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
    title: "FAQs",
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

  return <HeaderWrapper ref={ref} />;
}

const HeaderWrapper = React.forwardRef<HTMLElement, { className?: string }>(
  function HeaderWrapper({ className }, ref) {
    return (
      <>
        <DesktopHeader ref={ref} className="hidden sm:flex" />
        <MobileHeader ref={ref} className="flex sm:hidden" />
      </>
    );
  },
);

const DesktopHeader = React.forwardRef<HTMLElement, { className?: string }>(
  function DesktopHeader({ className }, ref) {
    return (
      <header
        ref={ref}
        className={`fixed z-50 flex max-h-32 w-full items-center justify-center bg-transparent p-4 ${className || ""}`}
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
      </header>
    );
  },
);

const MobileHeader = React.forwardRef<HTMLElement, { className?: string }>(
  function MobileHeader({ className }, ref) {
    const sheetId = React.useId();
    return (
      <header
        ref={ref}
        className={`fixed right-0 left-0 z-50 flex items-center justify-between bg-transparent px-3 py-3 ${className || ""}`}
        aria-hidden={false}
      >
        <a href="/" className="shrink-0">
          <Image
            src={getLogoSrc("into-the-deep", "lockup")}
            alt="Logo"
            width={120}
            height={20}
            className="h-20 w-auto"
            loading="eager"
          />
        </a>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              aria-label="Open navigation"
              className="mr-1 inline-flex h-10 w-10 items-center justify-center rounded-md border border-yellow-400/60 bg-black/30 text-yellow-400 shadow-sm backdrop-blur transition hover:bg-black/50 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            id={sheetId}
            side="right"
            className="w-72 border-yellow-400/30 bg-black/90 text-yellow-400"
          >
            <SheetHeader className="mb-4">
              <SheetTitle className="text-yellow-400">Menu</SheetTitle>
              <SheetDescription className="text-sm text-yellow-200/80">
                Choose where to go next.
              </SheetDescription>
            </SheetHeader>
            <NavigationMenu className="space-y-2">
              <NavigationMenuList className="flex-col">
                <NavigationMenuItem key={"Home"} className="w-full">
                  <NavigationMenuLink
                    href="/"
                    className="block rounded-md px-3 py-2 text-base text-yellow-400 transition hover:bg-yellow-400/10 focus:bg-yellow-400/10 focus:outline-none"
                  >
                    <div className="font-semibold">Home</div>
                    <p className="text-sm text-yellow-200/80">
                      Back to the homepage
                    </p>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                {components.map((component) => (
                  <NavigationMenuItem key={component.title} className="w-full">
                    <NavigationMenuLink
                      href={component.href}
                      className="block rounded-md px-3 py-2 text-base text-yellow-400 transition hover:bg-yellow-400/10 focus:bg-yellow-400/10 focus:outline-none"
                    >
                      <div className="font-semibold">{component.title}</div>
                      <p className="text-sm text-yellow-200/80">
                        {component.description}
                      </p>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <SheetFooter className="mt-4 flex justify-end">
              <SheetClose asChild>
                <Button className="rounded-md border border-yellow-400/60 px-3 py-2 text-sm text-yellow-400 transition hover:bg-yellow-400/10 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
                  Close
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </header>
    );
  },
);
