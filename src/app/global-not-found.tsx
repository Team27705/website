import "~/styles/globals.css";

import type { Metadata } from "next";
import type { Viewport } from "next";
import { Geist, Rubik, Rubik_Mono_One } from "next/font/google";
import SmoothScroller from "~/components/smooth-scroller";
import Header from "~/components/header";
import Footer from "~/components/footer";
import { Button } from "~/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The ByteKnights - FTC 27705",
  description:
    "The official website of FTC Team 27705, the Brooklyn ByteKnights.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export const viewport: Viewport = {
  themeColor: "#15162c",
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-rubik",
});

const rubikMonoOne = Rubik_Mono_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-rubik-mono-one",
});

export default function NotFound() {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${rubik.variable} ${rubikMonoOne.variable}`}
    >
      <body className="bg-[#15162c]">
        {/* Header must be outside the SmoothScroller wrapper so it remains fixed to the viewport */}
        <Header />
        <SmoothScroller>
          <div className="mx-auto flex min-h-[80vh] w-screen flex-col items-center justify-center gap-4 bg-linear-to-b from-[#032d64] to-[#15162c] text-center text-white sm:px-80">
            <h1 className="max-w-[80vw] text-4xl font-bold text-wrap text-yellow-400">
              You've swum into uncharted waters
            </h1>
            <h2 className="max-w-[80vw] text-2xl font-semibold text-wrap text-white">
              404: Could not find requested page.
            </h2>
            <Button asChild>
              <Link href="/">Return Home</Link>
            </Button>
          </div>
          <Footer />
        </SmoothScroller>
      </body>
    </html>
  );
}
