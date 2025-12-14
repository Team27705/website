import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { getLogoSrc } from "~/components/get-logo";
import { env } from "~/env";

const videoOpacityLevel = 0.3;

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-linear-to-b from-[#032d64] to-[#15162c] text-white">
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
              WebkitMask:
                `linear-gradient(to bottom, rgba(0,0,0,${videoOpacityLevel}) 0%, rgba(0,0,0,${videoOpacityLevel}) 50%, rgba(0,0,0,0) 100%)`,
            }}
          />
        </div>
        <div className="relative z-10 flex w-full max-w-[min(92vw,1200px)] flex-col items-center justify-center px-4 mb-10">
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
      <section className="pt-30">
        <h1 className="my-20 text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          BUILT TO PERFORM. <br />
          more placeholder stuff
        </h1>
      </section>
      {/* Header is rendered in the layout to keep it fixed to the viewport */}
      {
        /* Stuff to make this scroll */
        Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="my-8 h-32 w-full text-center" >holy guacamole what a cool homepage x{i+1}</div>
        ))
      }
    </main>
  );
}
