import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { get } from "http";
import { getLogoSrc } from "~/components/get-logo";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-linear-to-b from-[#032d64] to-[#15162c] text-white">
      <div className="container flex h-screen items-center justify-center px-4 py-16">
        <div className="flex w-full max-w-[min(92vw,1200px)] flex-col items-center justify-center">
          <Image
            src={getLogoSrc("into-the-deep", "tagline")}
            alt="Logo"
            width={800}
            height={700}
            className="h-auto w-[min(80vw,1000px)]"
          />
        </div>
        <ArrowDown
          className="absolute bottom-8 left-1/2 z-50 -translate-x-1/2 animate-bounce text-yellow-400"
          size={32}
        />
      </div>
      {
        /* Stuff to make this scroll */
        Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="my-8 h-24 w-full" />
        ))
      }
    </main>
  );
}
