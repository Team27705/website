import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { getLogoSrc, Logo } from "~/components/get-logo";
import { env } from "~/env";
import { TeamEventsComponent } from "~/components/team-events";
import {
  Award,
  AwardEventLogo,
  AwardEventName,
  AwardTitle,
} from "~/components/award";

const videoOpacityLevel = 0.3;

export default function HomePage() {
  return (
    <main className="mb-30 flex min-h-screen flex-col items-center justify-center bg-linear-to-b from-[#032d64] to-[#15162c] text-white">
      <div
        className="relative flex h-screen max-h-screen w-full items-center justify-center"
        id="hero"
      >
        <div className="absolute inset-0 overflow-hidden" id="background-video">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
            src={env.NEXT_PUBLIC_BG_VIDEO_URL}
            style={{
              mask: `linear-gradient(to bottom, rgba(0,0,0,${videoOpacityLevel}) 0%, rgba(0,0,0,${videoOpacityLevel}) 50%, rgba(0,0,0,0) 100%)`,
              WebkitMask: `linear-gradient(to bottom, rgba(0,0,0,${videoOpacityLevel}) 0%, rgba(0,0,0,${videoOpacityLevel}) 50%, rgba(0,0,0,0) 100%)`,
            }}
          />
        </div>
        <div className="relative z-10 mb-10 flex w-full max-w-[min(92vw,1200px)] flex-col items-center justify-center px-4">
          <Image
            loading="eager"
            src={getLogoSrc("into-the-deep", "tagline")}
            alt="Logo"
            width={800}
            height={700}
            className="h-auto w-[min(80vw,1000px)]"
          />
        </div>
        <ArrowDown
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-yellow-400"
          size={48}
        />
      </div>
      <section className="mt-35 max-w-[90vw]">
        <h1 className="my-10 text-center text-4xl font-bold text-wrap text-white md:text-5xl lg:text-6xl">
          WHAT WE'VE DONE
        </h1>
        <div className="mx-auto w-full justify-center flex flex-col sm:flex-row flex-wrap">
          <Award className="w-42">
            <AwardEventLogo>
              <Logo season="decode" variant="gamewordmark" className="w-full" />
            </AwardEventLogo>
            <AwardEventName>NYC Qualifier 4</AwardEventName>
            <AwardTitle>Inspire Award 2nd Place</AwardTitle>
          </Award>
        </div>
      </section>
      <section className="mt-5 max-w-[80vw]">
        <h1 className="my-10 text-center text-4xl font-bold text-wrap text-white md:text-5xl lg:text-6xl">
          OUR NEXT BYTES
        </h1>
        <TeamEventsComponent className="mx-auto" />
      </section>
      <section className="mt-5 max-w-[80vw]">
        <h1 className="my-10 text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          KEEP UP WITH US
        </h1>
        <div className="flex flex-row items-center justify-center gap-4 sm:flex-row sm:gap-12">
          <a href="https://instagram.com/team27705">
            <Image
              src="/icons/instagram.svg"
              width={84}
              height={84}
              alt="Instagram"
              className="inline-block"
            />
          </a>
          <div className="flex flex-col items-center justify-center text-center text-2xl">
            <span>Team27705</span>
          </div>
          <a href="https://github.com/Team27705">
            <Image
              src="/icons/github.svg"
              width={84}
              height={84}
              alt="GitHub"
              className="inline-block"
            />
          </a>
        </div>
      </section>
      <section className="mt-15 max-w-[90vw]">
        <h1 className="my-10 text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          OUR STORY
        </h1>
        <p className="mx-4 max-w-3xl text-center text-lg leading-relaxed text-white sm:mx-0 sm:text-xl">
          In 2024, the FTC Brooklyn ByteKnights was formed. As a rookie, we used
          a kit bot and with the limited resources and knowledge we had, we did
          the best we could. But for our second year, we’re ready to kick it off
          with a robot of our own! Get ready for this year’s season of FTC as
          the ByteKnights are ready to crush it!
        </p>
      </section>
    </main>
  );
}
